uraiko
======

Let's say you are working with urls in your application and you need to
check whether the url is okay and if it redirects to another
destination. Of course, we have some awesome libraries already to get
this done. But ``uraiko`` makes it easy, you just feed the url and
voila! ### Installation You can install uraiko using pip,

.. code:: sh

    pip install uraiko

Requires Python 3 or above to run. If you have Python 2 installed too,
make sure to use the right pip.

Usage
~~~~~

::

    >>> import uraiko
    >>> link = uraiko.url_check("iamlizu.com")
    >>> print(link)
    https://iamlizu.com/


Please look for logs at '~/Documents/uraiko.log'

What's new in version 1.0.1
~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Minor bug fixes