from flask import Flask, jsonify, request
from sklearn.externals import joblib
from flask_cors import CORS
# for printing to console for testing
import sys

from helpers import create_df
from helpers import prep_df
from helpers import groupby_to_dict
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
    req = request.get_json()
    print(req, file=sys.stderr)

    # creates a df of variables based on given month
    init_df = create_df()
    model_df = prep_df(init_df, req['month'])

    # run location model to find destination probabilities
    location_probs = location_model.predict_proba(model_df)

    # run frequency model to find how many bikes are rented in an hour
    frequency_probs = frequency_model.predict(model_df)

    return_locations = location_probs.tolist()
    return_frequencies = frequency_probs.tolist()

    # construct one df with vars and predictions
    combined_df = init_df.copy()
    combined_df['count'] = frequency_probs
    for i, station in enumerate(init_df['Starting Station ID'].unique()):
        combined_df[station] = location_probs[:, i]

    print(combined_df.columns, file=sys.stderr)
    # groupby to get path to predictions from the given variables
    grouped = combined_df.groupby(['Time_of_Day', 'Starting Station ID']).count()

    # convert to json, which is easier understood by client
    result = groupby_to_dict(grouped)

    return jsonify({'predictions': result})

if __name__ == '__main__':
    # loads pickled models
    location_model = joblib.load('./models/location.p')
    frequency_model = joblib.load('./models/frequency.p')
    app.run(port=4000)
