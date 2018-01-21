#!/usr/bin/python

import sys, time

def main():
    while True:
        time.sleep(0.2)
        comm = sys.stdin.readline()
        if comm is not None:
            counter = int(comm) + 1
            print(counter)
            sys.stdout.flush()
            comm = None
            
        
        
#start process
if __name__ == '__main__':
    main()