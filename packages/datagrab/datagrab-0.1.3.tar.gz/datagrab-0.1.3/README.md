# datagrab - the easy way to access and interpret textual web resources!

## Overview

Let's be clear: [requests](https://realpython.com/python-requests/) is an awesome library.
But even so, some really basic use cases still seem to require a lot of lines of code!

datagrab was written as a set of classes and methods designed to simplify
using the [requests library](https://realpython.com/python-requests/) for some typical
web scraping and REST API use cases.
In short: download, parse and process the returned text easily, so you are closer to doing something useful with it.

- Request data and ensure the desired result arrived with a single method (retrieve_response module)
- Connect to REST API services with Basic Authentication implemented for you (RESTConnect module)
- Parse the data and use simple functions to pull out the desired data (interpret_response module)

# Usage

## Getting it

To download datagrab, either fork this github repo or simply use Pypi via pip.

## Using it

### Basic usage

#### Getting a response and some text values

Let's assume the server is not expecting any specific header or other content:

    # RetrievedResponse is the class used to get the raw http response
    >>> from datagrab.retrieve_response.retrieve_response import RetrievedResponse
    >>> from datagrab.interpret_response.interpret_html_response import (
      ResponseInterpreter)

    >>> rr = RetrievedResponse("https://www.bbc.co.uk")

    # Send the http request and ensure that we actually got a 200 response
    # This method incorporates a number of exception handlers for most types
    # of http response codes (too many redirects, server not found etc.)

    >>> rr.getValidate()

    >>> rr.response #attribute created by getValidate method just executed
    <Response [200]>

    >>> ri = ResponseInterpreter(rr.response)

    # print anything with a h1-tag
    >>> for i in ri.getTextByElementType("h1"):
          print(i)

    BBC Homepage

Note that getTextByElementType returns a <map> object. This is handy because
you probably need an iterable in any case.

#### Getting attribute text

Let's say you want to retrieve all the link urls on a page (a common toy example).
Then you'd need all the hrefs of all \<a> tags.

    # Continued from above
    >>> hrefs = ri.getAttributeText("a", "href")
    >>> next(hrefs)
    "https://www.bbc.co.uk"

#### Searching by attribute

We cover two use cases here:

1. We want to find elements which have a specific attribute, where that attribute
   can take any value.
2. We want to find elements with an attribute having a specific value.

Let's see it in action.

    # Continued from above
    # Search for anything with a src attribute

    >>> srcs = ri.getElementsByType(True, # search for anything with a truthy tag
                                        # - i.e. any tag
                    attrs="src")       # with a src attribute

    >>> srcs[0] # getElementsByType method returns a list, so we can index it normally

    <script src=*bbc script file*><script>

    # Search for any link sending the user to the Homepage
    >>> hp_links = ri.getElementsByType("a", attrs={"href":"https://www.bbc.co.uk"})
    >>> hp_links[0]

    <a href="https://www.bbc.co.uk">Homepage</a>

It's worth noting that the elements we retrieve here are still just BeautifulSoup
element.Tag instances. So you can still access properties like .text, .attrs etc.
if you find that more intuitive.

Adding support for access to child nodes as a method of the ResponseInterpreter
class is a #TODO, but for now you can use the BeautifulSoup methods explained in
[this StackOverflow question](
  https://stackoverflow.com/questions/6287529/how-to-find-children-of-nodes-using-beautifulsoup
  ).

### Intermediate usage

#### Connecting to REST services
If the service you want to get resources from just requires you to submit a url,
you do as above up to rr.getValidate().

But if you need [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication),
we've got you covered with the following...

    >>> from datagrab.RESTConnect.basicAuth import BasicAuth
    >>> from datagrab.retrieve_response.retrieve_response import RetrievedResponse

    >>> ba = basicAuth(<my_username>, key=<my_app_key>) # Has attribute .basicAuthHeader

Note that the basicAuth class does not **need** a `key` kwarg to instantiate or be used
successfully. Some REST API's provide non-sensitive data and just require you to encode
your app key as the basic auth username. UK's Companies House API at time of writing
is a good example of this.

Now, we can use the .basicAuthHeader attribute of our ba instance to enhance the
RetrievedResponse class.

    # Continued from above
    # In keyword argument request_kwargs you can, if needed, add other keyword
    # arguments to a requests.get call such as proxies or params.

    >>> rr = RetrievedResponse(<my_url>, request_kwargs={"headers":ba.basicAuthHeader})
    >>> rr.getValidate()
    >>> rr.response
    <Response [200]>

And that's it!

OAuth support is a #TODO

#### Interpreting JSON data
Most RESTful services these days return data in JSON format -- unless you're using
steam-powered enterprise ERP's and the like, in which case you're still using
xml (for which the interpret_html_response examples above should do the job).

    from datagrab.interpret_response.interpret_json_response import JsonResponseInterpreter

This example draws on [Brian Dew's brilliant example of using the IMF's data api](
  http://www.bd-econ.com/imfapi1.html). This query delivers monthly import price
  index data for the UK between 2010 and 2011.

    # Build the url and request the data
    >>> url_base = 'http://dataservices.imf.org/REST/SDMX_JSON.svc/'
    >>> query = 'CompactData/IFS/M.GB.PMP_IX?startPeriod=2010&endPeriod=2011' # adjust codes here
    >>> query_url = url_base+query
    >>> rr = RetrievedResponse(query_url)
    >>> rr.getValidate()

    # instantiate JsonResponseInterpreter
    >>> jri = JsonResponseInterpreter(rr.response)
    # If you want, you can look at the raw text of the Response
    >>> jri.requestResponseText[:71]
    '{"CompactData":{"@xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance'

One of the more cumbersome parts of working with JSON data is acttually getting
to the node that you're interested in. This requires a lot of square brackets, in
our case

    jri.jsonDict["CompactData"]["DataSet"]["Series"]["Obs"]

Firstly, how do we know that this is the correct series of brackets?

The "easiest" way of getting to grips with a JSON data structure is normally to
dump it to a json file and use a desktop IDE to explore it.
But suppose we're on a work machine which doesn't let us install anything so
nice, or we just don't want to go through the hassle of yet another window on
our already cluttered desktop.

You'll be pleased to know that our JsonResponseInterpreter has a solution for
that, which is based on the `treelib` library. It allows us to view a hierarchical
element tree of all the nodes in the JSON

    >>>jri.visualize_json()
    CompactData
    ├── @xmlns
    ├── @xmlns:xsd
    ├── @xmlns:xsi
    ├── @xsi:schemaLocation
    ├── CompactData
    ├── DataSet
    │   ├── @xmlns
    │   └── Series
    │       ├── @BASE_YEAR
    │       ├── @FREQ
    │       ├── @INDICATOR
    │       ├── @REF_AREA
    │       ├── @TIME_FORMAT
    │       ├── @UNIT_MULT
    │       └── Obs
    └── Header
        ├── DataSetID
        ├── ID
        ├── Prepared
        ├── Receiver
        │   └── @id
        ├── Sender
        │   ├── @id
        │   ├── Contact
        │   │   ├── Telephone
        │   │   └── URI
        │   └── Name
        │       ├── #text
        │       └── @xml:lang
        └── Test

But we still have the following problem:

*Writing all of those square brackets is boring, error-prone and non-intuitive.*

What we want to do is feed to a function a list representing the node path that we want
to traverse. Well, since you asked...

To check out a particular point on the element tree, we can start using a
convenience method attached to our `jri` object: `jri.json_tree_traverse`

The bit we're interested in is the `"DataSet"` child nodes.

    >>> jri.json_tree_traverse(["CompactData","DataSet"])
    {'@xmlns': 'http://dataservices.imf.org/compact/IFS',
    'Series': {'@FREQ': 'M',
    '@REF_AREA': 'GB',
    '@INDICATOR': 'PMP_IX',
    '@UNIT_MULT': '0',
    '@BASE_YEAR': '2010=100',
    '@TIME_FORMAT': 'P1M',
    'Obs': [{'@TIME_PERIOD': '2010-01', '@OBS_VALUE': '96.7710371819961'},
    {'@TIME_PERIOD': '2010-02', '@OBS_VALUE': '97.5538160469667'},
    {'@TIME_PERIOD': '2010-03', '@OBS_VALUE': '100.391389432485'},
    ...

    # So, it seems we need to traverse to the 'Series'->'Obs' node to get the actual data.

    >>> import_price_index_data = jri.json_tree_traverse(
          ["CompactData", "DataSet","Series", "Obs"])

    >>> import_price_index_data[:3]
    [{'@TIME_PERIOD': '2010-01', '@OBS_VALUE': '96.7710371819961'},
     {'@TIME_PERIOD': '2010-02', '@OBS_VALUE': '97.5538160469667'},
     {'@TIME_PERIOD': '2010-03', '@OBS_VALUE': '100.391389432485'}]

So far, so good.

But now, let's say we want to take what we've got and just look at the value
for January 2011.

We have a convenience function for this!

    >>> from datagrab.interpret_response.interpret_json_response import (
     query_json_with_func, query_json)

    # query_json allows you to query based on the key-value pair

    >>> jan_2010 = query_json(import_price_index_data,"@TIME_PERIOD","2011-01")  

Often, you'll actually want to do more sophisticated queries. For example, you
might want to see change over time for a specific period of the year.

`query_json_with_func` is a more flexible option. You can pass it your own
filter function.

    >>> jan_all = query_json_with_func(import_price_index_data,
                        lambda x: x["@TIME_PERIOD"][-3:]=="-01")

    # query_json_with_func returns a `filter` so we'll view it here as a list.

    >>> list(jan_all)
    [{'@TIME_PERIOD': '2010-01', '@OBS_VALUE': '96.7710371819961'},
     {'@TIME_PERIOD': '2011-01', '@OBS_VALUE': '104.598825831703'}]
