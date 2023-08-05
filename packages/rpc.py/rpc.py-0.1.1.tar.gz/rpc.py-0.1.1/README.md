# rpc.py

An easy-to-use and powerful RPC framework. Base WSGI & ASGI.

Based on WSGI/ASGI, you can deploy the rpc.py server to any server and use http2 to get better performance.

## Install

Install from PyPi:

```bash
pip install rpc.py
```

Install from github:

```bash
pip install git+https://github.com/abersheeran/rpc.py@setup.py
```

## Usage

### Server side:

```python
import uvicorn
from rpcpy import RPC

app = RPC(mode="ASGI")


@app.register
async def sayhi(name: str) -> str:
    return f"hi {name}"


if __name__ == "__main__":
    uvicorn.run(app, interface="asgi3", port=65432)
```

OR

```python
import uvicorn
from rpcpy import RPC

app = RPC(mode="WSGI")


@app.register
def sayhi(name: str) -> str:
    return f"hi {name}"


if __name__ == "__main__":
    uvicorn.run(app, interface="wsgi", port=65432)
```

### Client side:

```python
import httpx
from rpcpy.client import Client

app = Client(httpx.Client(), base_url="http://127.0.0.1:65432/")


@app.remote_call
def sayhi(name: str) -> str:
    ...


if __name__ == "__main__":
    print(sayhi("rpc.py"))
```

OR

```python
import httpx
from rpcpy.client import Client

app = Client(httpx.AsyncClient(), base_url="http://127.0.0.1:65432/")


@app.remote_call
async def sayhi(name: str) -> str:
    ...


if __name__ == "__main__":
    import asyncio
    print(asyncio.get_event_loop().run_until_complete(sayhi("rpc.py")))
```
