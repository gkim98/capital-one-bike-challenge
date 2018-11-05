'''
    model expects dataframe in the same form as when it was trained,
    so follow same steps for consistent input to model
'''
from sklearn.preprocessing import scale
import pandas as pd

def prep_df(data, target_var):
    # removes chance of mutating original df
    df = data.copy()
    training_vars = [v for v in df.columns if v != target_var]
    
    # one hot encodes categorical variables
    for var in training_vars:
        temp_dummy = pd.get_dummies(df[var], drop_first=True)
        cleaned_df = pd.concat([df.drop([var], axis=1), temp_dummy], axis=1)

    return cleaned_df


