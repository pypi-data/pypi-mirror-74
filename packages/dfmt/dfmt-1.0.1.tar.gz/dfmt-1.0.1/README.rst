dfmt: format paragraphs, comments and doc strings
=================================================

Overview
--------

dfmt is a Python command line tool that can reformat text, allowing you to go from::

  this is a pretty big sentence with lots of words that takes a lot of horizontal space

to::

  this is a pretty big sentence with lots
  of words that takes a lot of horizontal
  space



It can also be used to format paragraphs in comments and doc strings.

Input::

  /**
   * This is a very long line in a Doxygen comment that takes a lot of space
   */

Output::

  /**
   * This is a very long line in a
   * Doxygen comment that takes a lot of
   * space
   */

Usage
-----

Send the text to stdin, and dfmt will write the results to stdout.

By default, text is wrapped at 80 characters. You can use the
`-w,--width` option to set a different size.

As such, ``dfmt`` can be used in a number of text editors.


How it works
------------

dfmt contains an hard-coded list of known prefixes.

It will start by splitting the input in "regions" that start with the same
prefix.

Then it will use the ``textwrap`` module from the Python standard library
to wrap each region while keeping the existing prefix.

It is also a bit smarted than vim's ``gq`` commands, because it can
keep leading ``*`` in Doxygen comments for instance.
