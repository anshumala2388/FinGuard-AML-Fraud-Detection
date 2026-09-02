import pandas as pd
from fastapi import APIRouter, UploadFile, File

from database import db
from ml.predictor import predict_transaction

router = APIRouter()


@router.post("/csv")
async def upload_csv(file: UploadFile = File(...)):

    df = pd.read_csv(file.file)

    records = df.to_dict(orient="records")

    fraud_count = 0

    for row in records:

        transaction = row.copy()


        transaction.pop("Class", None)

        prediction = predict_transaction(transaction)

        row["prediction"] = prediction

        if prediction == "Fraud":
            fraud_count += 1

            await db.fraud_alerts.insert_one(row)

    if records:
        await db.transactions.insert_many(records)

    return {
        "message": "CSV Uploaded Successfully",
        "total_rows": len(records),
        "fraud_detected": fraud_count
    }