from pydantic import BaseModel
from datetime import datetime


class FraudAlert(BaseModel):
    transaction_id: str
    risk_score: int
    risk_level: str
    created_at: datetime = datetime.utcnow()