from fastapi import APIRouter
from database import db

router = APIRouter()


@router.get("/stats")
async def dashboard_stats():

    total_transactions = await db.transactions.count_documents({})

    high_risk = await db.transactions.count_documents(
        {"risk_level": "High Risk"}
    )

    medium_risk = await db.transactions.count_documents(
        {"risk_level": "Medium Risk"}
    )

    low_risk = await db.transactions.count_documents(
        {"risk_level": "Low Risk"}
    )

    total_alerts = await db.fraud_alerts.count_documents({})

    return {
        "total_transactions": total_transactions,
        "high_risk_transactions": high_risk,
        "medium_risk_transactions": medium_risk,
        "low_risk_transactions": low_risk,
        "fraud_alerts": total_alerts
    }