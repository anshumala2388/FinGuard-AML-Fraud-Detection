import os
import joblib
import pandas as pd

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(__file__)
    )
)

MODEL_PATH = os.path.join(
    BASE_DIR,
    "trained_models",
    "isolation_forest.pkl"
)

model = joblib.load(MODEL_PATH)


EXPECTED_COLUMNS = [
    "Time",
    "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10",
    "V11", "V12", "V13", "V14", "V15", "V16", "V17", "V18", "V19",
    "V20", "V21", "V22", "V23", "V24", "V25", "V26", "V27", "V28",
    "Amount"
]


def predict_transaction(transaction: dict):

    df = pd.DataFrame([transaction])

    for col in EXPECTED_COLUMNS:
        if col not in df.columns:
            df[col] = 0

    df = df[EXPECTED_COLUMNS]

    prediction = model.predict(df)

    if prediction[0] == -1:
        return "Fraud"

    return "Normal"