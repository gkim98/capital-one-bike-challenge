from flask import Flask, jsonify, request
from sklearn.externals import joblib
from flask_cors import CORS

from helpers import create_df
from helpers import prep_df

app = Flask(__name__)
# allowing CORS to make calls across local environment
CORS(app)

@app.route('/')
def welcome_page():
    return "Hi! This is my little bike-share API!"

@app.route('/simulation', methods=['POST'])
def create_simulation():
    json_ = request.json
    print(json_)

    # creates a df of variables based on given month
    init_df = create_df(0)
    ex_return = init_df['Month'].tolist()

    return jsonify({'test': ex_return})

if __name__ == '__main__':
    # loads pickled models
    location_model = joblib.load('./models/location.p')
    frequency_model = joblib.load('./models/frequency.p')
    app.run(port=4000)
