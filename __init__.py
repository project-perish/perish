#!venv/bin/python

from flask import Flask

app = Flask(__name__)

from flask import render_template

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(threaded=True)
