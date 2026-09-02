
const token = localStorage.getItem("token");

if (!token) {
    alert("Please Login First");
    window.location.href = "login.html";
}

async function loadDashboard() {

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/dashboard/stats",
            {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            }
        );

        if (!response.ok) {
            throw new Error("Dashboard API Error");
        }

        const data = await response.json();

        console.log(data);

        document.getElementById("totalTransactions").innerHTML =
            data.total_transactions;

        document.getElementById("highRisk").innerHTML =
            data.high_risk_transactions;

        document.getElementById("riskScore").innerHTML =
            data.medium_risk_transactions;

        document.getElementById("lowRisk").innerHTML =
            data.low_risk_transactions;

        document.getElementById("fraudAlerts").innerHTML =
            data.fraud_alerts;

    }

    catch (error) {

        console.log(error);

        alert("Unable to Load Dashboard");

    }

}


document
.getElementById("logoutBtn")
.addEventListener("click", function () {

    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    window.location.href = "login.html";

});


loadDashboard();