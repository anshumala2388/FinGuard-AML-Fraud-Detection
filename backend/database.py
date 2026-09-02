from motor.motor_asyncio import AsyncIOMotorClient
from config import MONGO_URI, DATABASE_NAME

# MongoDB Client
client = AsyncIOMotorClient(MONGO_URI)

# Database
db = client[DATABASE_NAME]

# Collections
users_collection = db["users"]

transactions_collection = db["transactions"]

fraud_alerts_collection = db["fraud_alerts"]

risk_profiles_collection = db["risk_profiles"]


async def connect_db():
    """
    Check MongoDB connection.
    """
    try:
        await client.admin.command("ping")
        print("MongoDB Connected Successfully")
    except Exception as e:
        print("MongoDB Connection Failed")
        print(e)