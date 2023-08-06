# wkweb -- A Python Devkit For Web Development, Based On Flask 

### Install
```cmd
pip3 install wkweb
```

### Usage
```python
from web import Appication,NestableBlueprint
app=Appication(__name__)
@app.route('/')
def home():
    return 'Hello, World!'
app.run() # visit http://localhost:5000 in your browser
```
- NestableBlueprint
```python
from web import Appication,NestableBlueprint
app=Appication(__name__)
@app.route('/')
def home():
    return 'Hello, World!'

bpa=NestableBlueprint('a',__name__,static_map={'/':'./'})
bpb=NestableBlueprint('b',__name__,static_map={'/b':'./data'})
bpa.register_blueprint(bpb,url_prefix='/b')
app.register_blueprint(bpa,url_prefix='/a')
app.run() 
# visit in your browser:
# http://localhost:5000/ 
# http://localhost:5000/a 
# http://localhost:5000/a/b 
```

