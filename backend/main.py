from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import connect_db
from config import HOST, PORT
from routes.auth import router as auth_router
from routes.transactions import router as transaction_router
from routes.dashboard import router as dashboard_router
from routes.upload import router as upload_router
from routes.fraud import router as fraud_router
from routes.fraud_alerts import router as fraud_alert_router
from routes.graph import router as graph_router
from routes.report import router as report_router

app = FastAPI(
    title="FinGuard API",
    description="Real-Time AML & Transaction Fraud Detection System",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    await connect_db()
    print("FinGuard API Started Successfully")


@app.get("/")
async def home():
    return {
        "project": "FinGuard",
        "status": "Running",
        "version": "1.0.0"
    }

@app.get("/health")
async def health():
    return {
        "status": "Healthy"
    }
app.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"]
)

app.include_router(
    transaction_router,
    prefix="/transactions",
    tags=["Transactions"]
)
app.include_router(
    dashboard_router,
    prefix="/dashboard",
    tags=["Dashboard"]
)
app.include_router(
    upload_router,
    prefix="/upload",
    tags=["Upload"]
)
app.include_router(
    fraud_router,
    prefix="/fraud",
    tags=["Fraud Detection"]
)
app.include_router(
    fraud_alert_router,
    prefix="/alerts",
    tags=["Fraud Alerts"]
)
app.include_router(
    graph_router,
    prefix="/graph",
    tags=["Graph Analytics"]
)


app.include_router(
    report_router,
    prefix="/report",
    tags=["Reports"]
)