#!/usr/bin/env python
#-*- coding:utf-8 -*-

#############################################
# File Name: setup.py
# Author: Songyan Zhu
# Mail: sz394@exeter.ac.uk
# Created Time:  2020-05-08
#############################################


from setuptools import setup, find_packages

setup(
	name = "cho",
	version = "0.0.9",
	keywords = ("hcho", "chocho"),
	description = "left blank",
	long_description = "left blank",
	license = "MIT Licence",

	url = "https://github.com/soonyenju/cho",
	author = "Songyan Zhu",
	author_email = "soonyenju@foxmail.com",

	packages = find_packages(),
	include_package_data = True,
	platforms = "any",
	install_requires=[

	]
)