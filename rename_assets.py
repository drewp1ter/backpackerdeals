#!/usr/bin/env python
#-*- encoding: utf-8 -*-

import re, sys, glob, os

def _clear_name(file_name):
  result = re.search(r'(\w+)-', file_name)
  return result.group(1) if result else None

def hash(file_name):
  result = re.search(r'-(\w+).', file_name)
  return result.group(1) if result else None

def main():
  os.chdir('./.next/static/images')
  for file in sorted(glob.glob("*.jpg.webp")):
    print(file)
    clearname = _clear_name(file)
    jpg_file = glob.glob(clearname + "-*.jpg")[0]
    os.rename(jpg_file, clearname + "-" + hash(file) + '.jpg')

if __name__ == '__main__':
	main()