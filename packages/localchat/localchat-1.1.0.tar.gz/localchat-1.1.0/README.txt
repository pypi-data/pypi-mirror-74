# localchat

Localchat is a python library that helps setup server side and client side scripts of a Local Area Network Group Chat in no time.
This library makes it very easy to share messages to all the devices connected on the same LAN.

## Installation
Use the package manager [pip](https://pip.pypa.io/en/stable/) to install localchat
```bash
pip install localchat
```

## Requirements
- Python 3 - Download [here](https://www.python.org/downloads/)
- socket library (pre-installed with python package)
- threading library (pre-installed with python package)

## Usage 
```python
import localchat
localchat.help()
```
Calling help will list out all the details of the library.
```
localchat :: python library for quickly writing server and client side programs for a Chat Group on LAN
    Follow the below instructions to use this library

    Localchat library is pre-initialized with the following values of the GLOBAL variables
    PORT (port number) = 9999,                    FORMAT (encoding format) = 'utf-8'
    DISCONNECT_MSG (client disconnects on typing this message) = '!CONNECT'     
    HEADER (buffer size to send the size of the message) = 64
    
    1. initialize(port,format,header,disconnect_msg)    -   to change any of the pre-initialized global variables
                                                            (should be same for server and client)
                                                            
    2. start_server()   -   binds the server with its (IP, PORT) and gets ready to accept multiple clients requests,
                            receive messages and broadcast the messages to all the client available
    
    3. start_client(server_ip)   -   connects the client with the server ipv4 address provided and gets ready to send
                                     and receive messages concurrently
    
    4. send_message(client, message)   -    server can send the message to the client OR
                                            client can send message to the connected server       
    
    5. receive_msg(client)  -   server can receive message from the client OR
                                client can receive message from the connected server
    
    6. broadcast(message)   -   server broadcasts the message to all the available clients(ALL_CLIENTS)
    
Will be adding new features soon ...
```

## Sample Server Side Code
```python
import localchat

localchat.initialize(port = 9090, format = 'utf-8', disconnect_msg = 'disconnect')
localchat.start_server()
```

## Sample Client Side Code
```python
import localchat

localchat.initialize(port = 9090, format = 'utf-8', disconnect_msg = 'disconnect')
server_ip = '111.111.11.11'     # for example
                                # ipv4 address of the server system (see below to find ipv4 address)
localchat.start_client(server_ip)
```

## How to find IPv4 address of any system
- run ipconfig command in command-promt and copy the IPv4 address under the ```Wireless LAN adapter Wi-Fi``` section
```bash
$ ipconfig
```

## Note
The following arguments of the server and the client SHOULD BE SAME during ```.initialize```
- The ```port``` number
- The message encoding ```format``` 
- The ```disconnect_msg```
- The ```header``` (variable to send the size of the message) 

## Contributions
You are welcome to contribute via pull requests on [GitHub](https://github.com/DeepakJha01/localchat)

## Version
Stable Version - 1.1.0

## License
[MIT](https://github.com/DeepakJha01/localchat/blob/master/LICENSE)