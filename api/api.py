import requests
import time
from flask import Flask

url = "https://aws.random.cat/meow"

url2 = "https://catfact.ninja/facts"

app = Flask(__name__)


@app.route('/api/getCat')
def get_cat_pic():
    req = requests.get(url)

    data = req.json()

    return data


@app.route('/api/getFact')
def get_cat_fact():

    req = requests.get(url2)
    data = req.json()
    fact = data['data'][0]['fact']

    return {'fact': fact}
