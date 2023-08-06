# WSocket
**HTTP and Websocket both supported wsgi server**

Server(WSGI) creates and listens at the HTTP
socket, dispatching the requests to a handler. 
this is only use standard python libraries. 
also: 
this is a plugin to ServerLight Framework.

**for a better experiense install [servelight](https://www.github.com/Ksengine/ServeLight)**

###Code to create and run the server looks like this:\
using bottle(install bottle before try)
```python
#!/usr/bin/python
# -*- coding: utf-8 -*-
from bottle import request, Bottle
from wsgi import WebSocketHandler, server
from time import sleep

app = Bottle()

@app.route('/')
def handle_websocket():
    wsock = request.environ.get('wsgi.websocket')
    if not wsock:
        return 'Hello World!'
    while True:
        message = wsock.receive()
        print(message)
        wsock.send('Your message was: %r' % message)
        sleep(3)
        wsock.send('Your message was: %r' % message)

def make_server(application):
    myserver = server.ThreadingWSGIServer(('', 9001), WebSocketHandler)
    myserver.set_app(application)
    return myserver

httpd = make_server(app)
print('WSGIServer: Serving HTTP on port 9001 ...\n')
try:
    httpd.serve_forever()
except:
    print('WSGIServer: Server Stopped')
```
run this code
download client.html file
open it with browser
see how it works!
then navigate to http://localhost:9001
You can see
    Hello World!
### Features
 - the power of websocket
 - fast ( It's very fast )
 - simple
 - lightweight (simple and lightweight )
 -  [WSGI](http://www.wsgi.org/) ( supports web server gateway interface )
 - with web frameworks (any  [WSGI](http://www.wsgi.org/)  framework supported)
 
> Flask, Django, Pyramid, Bottle supported

**View Documentaion***
### License
Code and documentation are available according to the MIT License (see  [LICENSE](https://github.com/Ksengine/WSocket/blob/master/LICENSE)).
