from fastapi import APIRouter
from database import db
from graph.graph_builder import build_transaction_graph
from graph.aml_detector import detect_suspicious_paths

router = APIRouter()


@router.get("/network")
async def transaction_network():

    transactions = []

    async for item in db.transactions.find():
        transactions.append(item)

    G = build_transaction_graph(transactions)

    nodes = list(G.nodes())
    edges = list(G.edges(data=True))

    return {
        "nodes": nodes,
        "edges": edges
    }
@router.get("/aml")
async def aml_detection():

    transactions = []

    async for item in db.transactions.find():
        transactions.append(item)

    G = build_transaction_graph(transactions)

    suspicious = detect_suspicious_paths(G)

    return {
        "suspicious_patterns": suspicious
    }