import networkx as nx

def detect_suspicious_paths(G):

    suspicious = []

    # Circular Transactions
    cycles = list(nx.simple_cycles(G))

    for cycle in cycles:

        suspicious.append({
            "type": "Circular Transaction",
            "path": " -> ".join(cycle)
        })

    # High Degree Nodes (Many Receivers)
    for node in G.nodes():

        if G.out_degree(node) >= 3:

            suspicious.append({
                "type": "Multiple Transfers",
                "path": node
            })

    return suspicious