from flask import *

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    url_for('static', filename='styles/MainStyleSheet.css')
    return render_template('Home2.html')

@app.route('/Covid19.html/')
def Covid19():
    url_for('static', filename='styles/MainStyleSheet.css')
    return render_template('Covid19.html')

@app.route('/FindMyLecture.html/')
def lecture():
    url_for('static', filename='styles/MainStyleSheet.css')
    return render_template('FindMyLecture.html')

if __name__ == '__main__':
   app.run(debug = True)