from flask import Flask, jsonify, request
from sklearn.externals import joblib
from flask_cors import CORS
# for printing to console for testing
import sys

from helpers import create_df
from helpers import prep_df
from sklearn.linear_model import LogisticRegression
from sklearn.linear_model import LinearRegression

app = Flask(__name__)
# allowing CORS to make calls across local environment
CORS(app)

@app.route('/')
def welcome_page():
    return "Hi! This is my little bike-share API!"

@app.route('/simulation', methods=['POST'])
def create_simulation():
    json_ = request.json
    print(json_, file=sys.stderr)
    print(json_)

    # creates a df of variables based on given month
    init_df = create_df()
    model_df = prep_df(init_df)

    # run location model to find destination probabilities
    location_probs = location_model.predict_proba(model_df)
    print(location_probs[1:2], file=sys.stderr)

    # run frequency model to find how many bikes are rented in an hour
    frequency_probs = frequency_model.predict(model_df)
    print(frequency_probs[1:2], file=sys.stderr)

    return_locations = location_probs.tolist()
    return_frequencies = frequency_probs.tolist()

    return jsonify({'location_probs': return_locations, 'freq_probs': return_frequencies})

if __name__ == '__main__':
    # loads pickled models
    location_model = joblib.load('./models/location.p')
    frequency_model = joblib.load('./models/frequency.p')
    app.run(port=4000)
