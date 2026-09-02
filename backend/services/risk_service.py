def calculate_risk(transaction):

    score = 0

    if transaction["amount"] > 100000:
        score += 50

    if transaction["country"].lower() not in [
        "india",
        "usa",
        "uk"
    ]:
        score += 30

   
    if transaction["transaction_type"].lower() == "crypto":
        score += 20

    return score


def get_risk_level(score):

    if score >= 70:
        return "High Risk"

    elif score >= 30:
        return "Medium Risk"

    return "Low Risk"
