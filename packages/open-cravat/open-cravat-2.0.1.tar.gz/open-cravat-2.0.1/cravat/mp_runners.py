from . import util
import time
import traceback
import os
import logging
from logging.handlers import QueueHandler
from queue import Empty
import signal
import cravat.admin_util as au

def init_worker():
    signal.signal(signal.SIGINT, signal.SIG_IGN)

def annot_from_queue(start_queue, end_queue, queue_populated, status_writer):
    try:
        while True:
            try:
                task = start_queue.get(True, 1)
            except Empty:
                if queue_populated:
                    break
                else:
                    continue
            module, cmd = task
            annotator_class = util.load_class(module.script_path, "CravatAnnotator")
            annotator = annotator_class(cmd, status_writer)
            annotator.run()
            end_queue.put(module.name)
    except:
        traceback.print_exc()

def mapper_runner (crv_path, seekpos, chunksize, run_name, output_dir, status_writer, module_name, pos_no, primary_transcript):
    module = au.get_local_module_info(module_name)
    cmd = [module.script_path, 
           crv_path,
           '-n', run_name,
           '--seekpos', str(seekpos),
           '--chunksize', str(chunksize),
           '--slavemode',
           '--postfix', f'.{pos_no:010.0f}',
           '-d', output_dir
           ]
    if primary_transcript is not None:
        cmd.extend(['--primary-transcript'])
        cmd.extend(primary_transcript.split(';'))
    genemapper_class = util.load_class(module.script_path, 'Mapper')
    genemapper = genemapper_class(cmd, status_writer)
    output = genemapper.run_as_slave(pos_no)
    return output
