from app import app
import requests
from flask import render_template, request, redirect, url_for

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/demo')
def demo():
	return render_template('demo.html')

@app.route('/email', methods=['POST'])
def email():
	name = request.form['name']
	email = request.form['email']
	message = request.form['message']

	requests.post(
        "https://api.mailgun.net/v3/sandbox167ec7577aec4a1bb1658a53f5735398.mailgun.org/messages",
        auth=("api", "key-53b75420e2d2fb7c45eb241f8ce94e0e"),
        data={"from": "Excited User <mailgun@sandbox167ec7577aec4a1bb1658a53f5735398.mailgun.org>",
              "to": ["xag9bb@virginia.edu"],
              "subject": "Message from Perish.me - Name: " + name + "- Email: " + email,
              "text": message})
	return redirect(url_for('index')+"#contact")