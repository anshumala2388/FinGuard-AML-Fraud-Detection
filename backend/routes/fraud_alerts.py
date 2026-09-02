from fastapi import APIRouter
from database import db

router = APIRouter()


@router.get("/all")
async def get_alerts():

    alerts = []

    async for item in db.fraud_alerts.find():

        item["_id"] = str(item["_id"])

        alerts.append(item)

    return alerts