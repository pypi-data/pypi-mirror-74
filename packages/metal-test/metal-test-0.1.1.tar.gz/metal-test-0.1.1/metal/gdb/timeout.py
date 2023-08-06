import gdb
import threading
import datetime
import time

def wrap(func, ev):
    try:
        func(ev)
    except gdb.error as e:
        import traceback
        gdb.write("Error in metal/gdb/-timeout.py: {}\n\n{}".format(e, traceback.format_exc()), gdb.STDERR)
        raise e

class Timeout(gdb.Parameter):
    def __init__(self):
        super(Timeout, self).__init__("metal-timeout",
                                      gdb.COMMAND_DATA,
                                      gdb.PARAM_UINTEGER)
        self.value = 0
        self.thread = None
        self.timeout = None
        self.gdb_running = False
        self.i_am_interrupting = False
        self.gdb_exited = False

        self.__cont   = lambda ev: wrap(self.cont, ev)
        self.__stop   = lambda ev: wrap(self.stop, ev)
        self.__exited = lambda ev: wrap(self.exit, ev)

    def connect_events(self):
        gdb.events.cont.  connect(self.__cont)
        gdb.events.stop.  connect(self.__stop)
        gdb.events.exited.connect(self.__exited)

    def disconnect_events(self):
        gdb.events.cont.  disconnect(self.__cont)
        gdb.events.stop.  disconnect(self.__stop)
        gdb.events.exited.disconnect(self.__exited)

    def __enter__(self):
        self.connect_events()

    def __exit__(self):
        self.disconnect_events()

    set_doc = '''Set a timeout for the gdb execution.'''
    show_doc = '''This parameter sets a time out for the gdb execution.'''

    def get_set_string(self):
        if self.value and self.value > 0:
            self.timeout = datetime.datetime.now() + datetime.timedelta(seconds=self.value)
        else:
            self.timeout = None
        if self.value and not self.thread:
            self.thread = threading.Thread(target=self.work, args=(None,))
            self.thread.start()
        return "Timeout set to {}".format(self.timeout)

    def work(self, dummy):
        while not self.gdb_exited and (self.timeout is None or self.timeout > datetime.datetime.now()):
            time.sleep(1)

        if self.gdb_exited or self.timeout is None:
            return
        if self.gdb_running:
            self.i_am_interrupting = True
            gdb.post_event(self.interrupt)
        else:
            gdb.post_event(self.quit)

    def interrupt(self):
        raise KeyboardInterrupt()

    def cont(self, ev): self.gdb_running = True

    def stop(self, ev):
        self.gdb_running = False
        if self.i_am_interrupting:
            gdb.post_event(self.quit)

    def quit(self):
        gdb.write("Timeout reached, interrupting execution\n", gdb.STDERR)
        gdb.execute("quit -1")

    def exit(self, ev): self.gdb_exited = True

