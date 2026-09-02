from fastapi import APIRouter
from database import db

router = APIRouter()


@router.get("/summary")
async def report_summary():

    transactions = await db.transactions.count_documents({})
    alerts = await db.fraud_alerts.count_documents({})

    return {
        "total_transactions": transactions,
        "fraud_alerts": alerts
    }