import logging
import sys
from abc import abstractmethod

from fedml.distributed.communication import CommunicationManager
from fedml.distributed.communication.mpi_message import MPIMessage
from fedml.distributed.communication.observer import Observer


class ServerMananger(Observer):

    def __init__(self, args, comm, rank, size):
        self.args = args
        self.size = size
        self.rank = rank

        self.com_manager = CommunicationManager(comm, rank, size, node_type="server")
        self.com_manager.add_observer(self)
        self.message_handler_dict = dict()

    def run(self):
        self.register_message_receive_handlers()
        self.com_manager.handle_receive_message()

    def get_sender_id(self):
        return self.rank

    def receive_message(self, msg_type, msg_params) -> None:
        # logging.info("receive_message. rank_id = %d, msg_type = %s. msg_params = %s" % (
        #     self.rank, str(msg_type), str(msg_params.get_content())))
        handler_callback_func = self.message_handler_dict[msg_type]
        handler_callback_func(msg_params)

    def send_message(self, message):
        msg = MPIMessage()
        msg.add(MPIMessage.MSG_ARG_KEY_TYPE, message.get_type())
        msg.add(MPIMessage.MSG_ARG_KEY_SENDER, message.get_sender_id())
        msg.add(MPIMessage.MSG_ARG_KEY_RECEIVER, message.get_receiver_id())
        for key, value in message.get_params().items():
            # logging.info("%s == %s" % (key, value))
            msg.add(key, value)
        self.com_manager.send_message(msg)

    @abstractmethod
    def register_message_receive_handlers(self) -> None:
        pass

    def register_message_receive_handler(self, msg_type, handler_callback_func):
        self.message_handler_dict[msg_type] = handler_callback_func

    def finish(self):
        logging.info("__finish server")
        self.com_manager.stop_receive_message()
        logging.info("sys.exit(0)")
        sys.exit()
