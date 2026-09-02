from fastapi import APIRouter
from ml.predictor import predict_transaction
from models.fraud_transaction import FraudTransaction
router = APIRouter()
@router.post("/analyze")
async def analyze(transaction: FraudTransaction):
    result = predict_transaction(
        transaction.model_dump()
    )
    return {
        "prediction": result
    }