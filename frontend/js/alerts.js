

const token = localStorage.getItem("token");

if (!token) {
    alert("Please Login First");
    window.location.href = "login.html";
}


async function loadAlerts() {

    try {

        const response = await fetch(

            "http://127.0.0.1:8000/alerts/all",

            {
                method: "GET",

                headers: {
                    "Authorization": "Bearer " + token
                }
            }

        );

        if (!response.ok) {
            throw new Error("Unable to Load Alerts");
        }

        const alerts = await response.json();

        const table = document.getElementById("alertTable");

        table.innerHTML = "";

        alerts.forEach(alert => {

            table.innerHTML += `

            <tr>

                <td>${alert._id}</td>

                <td>${alert.transaction_id || alert.Time || "-"}</td>

                <td>₹ ${alert.amount || alert.Amount || "-"}</td>

                <td style="color:red;font-weight:bold;">

                    ${alert.prediction || alert.risk_level || "Fraud"}

                </td>

            </tr>

            `;

        });

    }

    catch(error){

        console.log(error);

        alert("Unable to Load Alerts");

    }

}

loadAlerts();