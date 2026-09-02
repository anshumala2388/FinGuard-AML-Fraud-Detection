from fastapi import APIRouter, HTTPException
from database import db
from models.transaction import Transaction
from services.risk_service import calculate_risk, get_risk_level
from datetime import datetime

router = APIRouter()


@router.post("/add")
async def add_transaction(transaction: Transaction):

    data = transaction.model_dump()

    risk_score = calculate_risk(data)
    risk_level = get_risk_level(risk_score)

    data["risk_score"] = risk_score
    data["risk_level"] = risk_level

    existing = await db.transactions.find_one(
        {"transaction_id": data["transaction_id"]}
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Transaction already exists"
        )

   
    await db.transactions.insert_one(data)

    if risk_level == "High Risk":

        alert = {
            "transaction_id": data["transaction_id"],
            "risk_score": risk_score,
            "risk_level": risk_level,
            "created_at": datetime.utcnow()
        }

        await db.fraud_alerts.insert_one(alert)

    return {
        "message": "Transaction Added Successfully",
        "risk_score": risk_score,
        "risk_level": risk_level
    }


@router.get("/all")
async def get_transactions():

    transactions = []

    async for item in db.transactions.find():
        item["_id"] = str(item["_id"])
        transactions.append(item)

    return transactions