# -*- coding: UTF-8 -*-
# doctest etgen/html.py
# Adapted copy from lxml\src\lxml\html\builder.py
# --------------------------------------------------------------------
# The ElementTree toolkit is
# Copyright (c) 1999-2004 by Fredrik Lundh
# Modifications in this file are
# Copyright (c) 2012-2019 Rumma & Ko Ltd
# --------------------------------------------------------------------

"""Defines an ElementTree Builder for generating HTML documents.

.. data:: E

    The global ElementTree Builder object.

Usage:

>>> # from etgen.html import E
>>> import lxml.usedoctest
>>> html = E.html(
...            E.head( E.title("Hello World") ),
...            E.body(
...              E.h1("Hello World !"),
...              CLASS("main")
...            )
...        )

>>> print (tostring_pretty(html))
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body class="main">
    <h1>Hello World !</h1>
  </body>
</html>


>>> kw = dict(title=u'Ein süßes Beispiel')
>>> kw.update(href="foo/bar.html")
>>> btn = E.button(type='button', **CLASS('x-btn-text x-tbar-upload'))
>>> html = E.a(btn, **kw)
>>> print (tostring_pretty(html))
<a href="foo/bar.html" title="Ein süßes Beispiel">
  <button class="x-btn-text x-tbar-upload" type="button"/>
</a>

You can also do the opposite, i.e. parse HTML:

>>> from lxml import etree
>>> E_raw = etree.fromstring
>>> html = E_raw('''<a href="foo/bar.html"
... title="Ein s&#252;&#223;es Beispiel">
... <button class="x-btn-text x-tbar-upload" type="button"/>
... </a>''')
>>> print(tostring_pretty(html))
<a href="foo/bar.html" title="Ein süßes Beispiel">
  <button class="x-btn-text x-tbar-upload" type="button"/>
</a>


>>> print(tostring(E_raw(
...     '<ul type="disc"><li>First</li><li>Second</li></ul>')))
<ul type="disc"><li>First</li><li>Second</li></ul>

>>> html = E.div(E.p("First"), E.p("Second"))
>>> print(tostring_pretty(html))
<div>
  <p>First</p>
  <p>Second</p>
</div>
>>> html.attrib['class'] = 'htmlText'
>>> print(tostring_pretty(html))
<div class="htmlText">
  <p>First</p>
  <p>Second</p>
</div>

Avoid self-closing tags
=======================

lxml generates self-closing tags for elements without children:

>>> print(tostring(E.div()))
<div/>

Some environments refuse empty ``div>`` elements and interpret a ``<div/>`` as
``<div>`` (don't ask me why).  You can avoid the self-closing tag by setting
the ``text`` attribute to an empty string:

>>> html = E.div()
>>> html.text = ""
>>> print(tostring(html))
<div></div>

Note that you must set ``text`` explicitly. Simply specifying it when
instantiating the element is not enough:

>>> print(tostring(E.div("")))
<div/>

>>> print(tostring(E.div(" ")))
<div/>

The real solution would be to use the "html" method when writing the tree to
html:

>>> print(tostring(E.div(), method="html"))
<div></div>

TODO: This approach has been active as default value (see disabled line in code
of :func:`tostring`) and I don't remember why we disabled it.  I suggest to
re-enable it and test thoroughly whether this causes regressions (and if yes,
why it causes them).




"""

from builtins import object

import types
from xml.etree import ElementTree as ET
# from lxml.etree import HTML
from lxml import etree
from lxml.etree import iselement
from etgen.utils import join_elems, forcetext
# from etgen.utils import Namespace
from etgen.html2rst import html2rst, UnsupportedHtmlTag
# from htmlentitydefs import name2codepoint

# ENTITIES = {}
# ENTITIES.update((x, unichr(i)) for x, i in name2codepoint.iteritems())


# def CreateParser():
#     """Every string that is being parsed must get its own parser instance.
#     This is because "Due to limitations in the Expat library used by
#     pyexpat, the xmlparser instance returned can only be used to parse
#     a single XML document. Call ParserCreate for each document to
#     provide unique parser instances. (`docs.python.org
#     <https://docs.python.org/2/library/pyexpat.html>`_)

#     """
#     p = ET.XMLParser()
#     # PARSER.entity.update(htmlentitydefs.entitydefs)
#     p.entity = ENTITIES
#     assert 'otilde' in p.entity
#     assert 'eacute' in p.entity
#     assert 'nbsp' in p.entity
#     return p

# class RAW_HTML_STRING(unicode):
#     pass


def CLASS(*args): # class is a reserved word in Python
    return {"class": ' '.join(args)}

# class HtmlNamespace(Namespace):
#     """The HTML namespace.
#     This is instantiated as ``E``.
#     """

def tostring(v, *args, **kw):
    # if isinstance(v, types.GeneratorType):
    if isinstance(v, (types.GeneratorType, list, tuple)):
        return "".join([tostring(x, *args, **kw) for x in v])
    if iselement(v):
        # kw.setdefault('method', 'html')
        kw.setdefault('encoding', 'unicode')
        return etree.tostring(v, *args, **kw)
    return str(v)

def tostring_pretty(*args, **kw):
    kw.setdefault('pretty_print', True)
    return tostring(*args, **kw).strip()  # remove blank line at end
    # return prettify(s)


def to_rst(v, stripped=True):
    """Render the given value as an rst formatted string."""
    if isinstance(v, types.GeneratorType):
        return "".join([to_rst(x, stripped) for x in v])
    # 20200501 new rule : if v is a str, then it is supposed to be raw html
    if isinstance(v, str):
        if not v:
            return v
        v2 = etree.fromstring(v)
        if not iselement(v2):
            raise Exception(
                "fromstring({!r}) returned {} (expected element)".format(v, v2))
        v = v2
    if iselement(v):
        try:
            return html2rst(v, stripped)
        except UnsupportedHtmlTag as e:
            raise Exception("{} while converting {} to reSTructuredText".format(e, tostring(v)))
    return str(v)

#     # def raw(self, raw_html):
#     #     return RAW_HTML_STRING(raw_html)

#     def raw(self, raw_html):
#         """
#         Parses the given string into an HTML Element.

#         It the string contains a a single top-level element, then this
#         element is returned. Otherwise return the wrapping ``body``
#         element.
#         """
#         # print 20151008, raw_html

#         # the lxml parser wraps `<html><body>...</body></html>` around
#         # the snippet, but we don't want it.
#         try:
#             root = HTML(raw_html)[0]
#             # root = E.html(raw_html)[0]
#         except Exception as e:
#             return E.p("Invalid HTML ({}) in {}".format(e, raw_html))
#         if len(root) == 1:
#             return root[0]
#         return root
#         # try:
#         #     return self.fromstring(raw_html, parser=CreateParser())
#         # except ET.ParseError as e:
#         #     raise Exception("ParseError {0} in {1}".format(e, raw_html))

from lxml.builder import E

# E = HtmlNamespace(None, set("""
# a
# abbr
# acronym
# address
# alt
# applet
# area
# b
# base
# basefont
# bdo
# big
# blockquote
# body
# br
# button
# caption
# center
# cite
# code
# col
# colgroup
# dd
# del
# dfn
# dir
# div
# dl
# dt
# em
# fieldset
# font
# form
# frame
# frameset
# h1
# h2
# h3
# h4
# h5
# h6
# head
# height
# hr
# html
# i
# iframe
# img
# input
# ins
# isindex
# kbd
# label
# legend
# li
# link
# map
# menu
# meta
# name
# noframes
# noscript
# object
# ol
# optgroup
# option
# p
# param
# pre
# q
# s
# samp
# script
# select
# small
# span
# strike
# strong
# style
# sub
# sup
# table
# tbody
# td
# textarea
# tfoot
# th
# thead
# title
# tr
# tt
# u
# ul
# var

# class
# id
# bgcolor
# cellspacing
# width
# align
# valign
# href
# type
# rel
# target
# value
# onclick
# src
# rows
# data-toggle
# tabindex
# placeholder
# """.split()))


def table_header_row(*headers, **kw):
    return E.tr(*[E.th(h, **kw) for h in headers])


def table_body_row(*cells, **kw):
    return E.tr(*[E.td(h, **kw) for h in cells])


class Table(object):
    """A pythonic representation of a ``<table>`` with ``<head>``,
    ``<foot>`` and ``<body>``.

    """
    def __init__(self):
        self.clear()

    def clear(self):
        self.head = []
        self.foot = []
        self.body = []
        self.attrib = dict()

    def add_header_row(self, *args, **kw):
        e = table_header_row(*args, **kw)
        self.head.append(e)
        return e

    def add_footer_row(self, *args, **kw):
        e = table_body_row(*args, **kw)
        self.foot.append(e)
        return e

    def add_body_row(self, *args, **kw):
        e = table_body_row(*args, **kw)
        self.body.append(e)
        return e

    def as_element(self):
        children = []
        if self.head:
            children.append(E.thead(*self.head))
        if self.foot:
            children.append(E.tfoot(*self.foot))
        if self.body:
            children.append(E.tbody(*self.body))
        return E.table(*children, **self.attrib)


class Document(object):
    """A pythonic representation of a ``<body>`` with a ``<title>`` and
    some ``<head>`` tags for stylesheets.

    """

    def __init__(self, title, stylesheets=None):
        self.title = title
        self.body = []
        self.stylesheets = stylesheets or []

    def add_stylesheet(self, url):
        self.stylesheets.append(url)

    def add_table(self):
        t = Table()
        self.body.append(t)
        return t

    def write(self, *args, **kw):
        ET.ElementTree(self.as_element()).write(*args, **kw)

    def as_element(self):
        body = []
        for e in self.body:
            if isinstance(e, Table):
                body.append(e.as_element())
            else:
                body.append(e)
        headers = []
        for css in self.stylesheets:
            headers.append(E.link(rel="stylesheet", type="text/css", href=css))
        headers.append(E.title(self.title))

        return E.html(
            E.head(*headers),
            E.body(*body)
        )


def lines2p(lines, min_height=0, sep=E.br, **attrs):
    """
    Convert the given list of text lines `lines` into a paragraph
    (``<p>``) with one ``<br>`` between each line. If optional
    `min_height` is given, add empty lines if necessary.

    Examples:

    >>> print(tostring(lines2p(['first', 'second'])))
    <p>first<br/>second</p>

    >>> print(tostring(lines2p(['first', 'second'], min_height=5)))
    <p>first<br/>second<br/><br/><br/></p>

    If `min_height` is specified, and `lines` contains more items,
    then we don't truncate:

    >>> print(tostring(lines2p(['a', 'b', 'c', 'd', 'e'], min_height=4)))
    <p>a<br/>b<br/>c<br/>d<br/>e</p>

    This also works:

    >>> print(tostring(lines2p([], min_height=5)))
    <p><br/><br/><br/><br/></p>
    """
    while len(lines) < min_height:
        lines.append('')
    lines = join_elems(lines, sep)
    return E.p(*lines, **attrs)


def _test():
    import doctest
    doctest.testmod()

if __name__ == "__main__":
    _test()
