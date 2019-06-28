#!/usr/bin/env python
#-*- encoding: utf-8 -*-

# конвертация картинок в webp

import re, sys, glob, os, subprocess

def _clear_name(file_name):
  result = re.search(r'(\w+)-', file_name)
  return result.group(1) if result else None

def hash(file_name):
  result = re.search(r'-(\w+).', file_name)
  return result.group(1) if result else None

def main():
  os.chdir('./.next/static/images')
  for file in [f for f in os.listdir('.') if re.search(r'.+\.(jpg$|png$)', f)]:
    print file
    subprocess.call(['cwebp', '-q', '86', file, '-o', file + '.webp'])

if __name__ == '__main__':
	main()