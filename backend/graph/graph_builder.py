import networkx as nx
def build_transaction_graph(transactions):
    G = nx.DiGraph()
    for tx in transactions:
        if "sender" in tx and "receiver" in tx:
            G.add_edge(
                tx["sender"],
                tx["receiver"],
                amount=tx.get("amount",0)
            )
    return G