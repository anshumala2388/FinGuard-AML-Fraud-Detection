import pandas as pd
import joblib
import os
from sklearn.ensemble import IsolationForest
DATASET_PATH = "dataset/creditcard.csv"
df = pd.read_csv(DATASET_PATH)
print("Dataset Loaded Successfully")
print(df.shape)
X = df.drop("Class", axis=1)
model = IsolationForest(
    n_estimators=100,
    contamination=0.002,
    random_state=42
)
model.fit(X)
print("Model Trained Successfully")
os.makedirs("trained_models", exist_ok=True)
joblib.dump(model, "trained_models/isolation_forest.pkl")
print("Model Saved Successfully")