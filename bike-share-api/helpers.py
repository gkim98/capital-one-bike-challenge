'''
 creates a dataframe of variables for each point in the day 
 for each starting station
'''
import pandas as pd
import numpy as np
from sklearn.preprocessing import scale

stations = [3000., 3005., 3006., 3007., 3008., 3009., 3010., 3011., 3014.,
       3016., 3018., 3019., 3020., 3021., 3022., 3023., 3024., 3025.,
       3026., 3027., 3028., 3029., 3030., 3031., 3032., 3033., 3034.,
       3035., 3036., 3037., 3038., 3039., 3040., 3042., 3045., 3046.,
       3047., 3048., 3049., 3051., 3052., 3053., 3054., 3055., 3056.,
       3057., 3058., 3059., 3060., 3062., 3063., 3064., 3065., 3066.,
       3067., 3068., 3069., 3074., 3075., 3076., 3077., 3078., 3079.,
       3080., 3081., 3082., 4108.]

day_times = list(range(24))

months = ['Month_2', 'Month_3', 'Month_7', 'Month_8', 'Month_9', 'Month_10', 'Month_11', 'Month_12']

def create_df():
    # keep track of appending rows
    counter = 0
    result_df = pd.DataFrame(columns=['Starting Station ID', 'Time_of_Day'])
    for time in day_times:
        for station in stations:
            # produces combination for every time and station
            # order: Starting Station ID, Month, Time_of_Day
            result_df.loc[counter] = [int(station), time]
            counter = counter + 1

    return result_df


'''
    model expects dataframe in the same form as when it was trained,
    so follow same steps for consistent input to model
'''

def prep_df(data):
    # removes chance of mutating original df
    df = data.copy()
    
    # because month is passed to API, special precautions to keep its one-hot encoding
    one_hot_vars = [v for v in df.columns if v != 'Month']
    # one hot encodes categorical variables
    for var in one_hot_vars:
        temp_dummy = pd.get_dummies(df[var], prefix=var, drop_first=True)
        df = pd.concat([df.drop([var], axis=1), temp_dummy], axis=1)

    # appends the one-hot for the month variable
    entries = len(df.index)
    for month in months:
        if month == 'Month_' + month:
            # concats Series of ones if corresponding month
            month_encoding =  np.ones((entries, 1))
        else:
            month_encoding = np.zeros((entries, 1))
        df[month] = month_encoding

    return df