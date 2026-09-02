from pydantic import BaseModel
from datetime import datetime

class Transaction(BaseModel):
    transaction_id: str
    sender: str
    receiver: str
    amount: float
    currency: str
    country: str
    transaction_type: str
    timestamp: datetime = datetime.utcnow()