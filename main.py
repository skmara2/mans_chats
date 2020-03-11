from flask import Flask, render_template, jsonify, request
import requests
import json
import numpy as np

app = Flask(__name__)



global nn;
global kl;






@app.route('/')
def home():
  return render_template("chats.html")

@app.route('/chats')
def chats():
  return render_template("chats.html") 

@app.route('/health')
def health_check():
  return "OK"

@app.route('/chats/lasi')
def ielasit_chatu():
  chata_rindas=[]
  with open("chats.txt", "r", encoding="UTF-8") as f:
    for rinda in f:
      chata_rindas.append(rinda)
  return jsonify({"chats":chata_rindas}) 

@app.route('/chats/suuti', methods=['POST'])  
def suuti_zinu():
  dati=request.json
  with open("chats.txt", "a", newline="", encoding="UTF-8")as f:
     f.write(dati["chats"]+"\n")
  return ielasit_chatu()

app.run(host='0.0.0.0', port=8020)