#!/usr/bin/env python3

import sys

from concurrent.futures import ProcessPoolExecutor

import asyncio

from ifconf import configure_module, config_callback, configure_main

from ducts.backend.asr import AutomaticSpeechRecognizerManager

def run():
    loop = asyncio.get_event_loop()
    asr = AutomaticSpeechRecognizerManager(loop)
    asyncio.ensure_future(asr.run())
    try:
        loop.run_forever()
    except KeyboardInterrupt:
        pass
    finally:
        asr.close()
        loop.close()
    
def main():
    configure_main()
    run()
    
if __name__ == '__main__':
    configure_main()
    main()
