
const token = localStorage.getItem("token");

if (!token) {
    alert("Please Login First");
    window.location.href = "login.html";
}


async function loadTransactions() {

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/transactions/all",
            {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token
                }
            }
        );

        if (!response.ok) {
            throw new Error("Unable to fetch transactions");
        }

        const transactions = await response.json();

        console.log(transactions);

        const table = document.getElementById("transactionTable");

        table.innerHTML = "";

        transactions.forEach(tx => {

            let color = "#16a34a";

            if (tx.risk_level === "Medium Risk")
                color = "#f59e0b";

            if (tx.risk_level === "High Risk")
                color = "#dc2626";

            table.innerHTML += `

<tr>

<td>${tx.transaction_id}</td>

<td>${tx.sender}</td>

<td>${tx.receiver}</td>

<td>₹ ${tx.amount.toLocaleString()}</td>

<td>${tx.currency}</td>

<td>${tx.country}</td>

<td>${tx.transaction_type}</td>

<td>${new Date(tx.timestamp).toLocaleString()}</td>

</tr>

<tr>

<td colspan="8">

<b style="color:${color}">

${tx.risk_level}

</b>

&nbsp;&nbsp;

Risk Score :
<b>${tx.risk_score}</b>

</td>

</tr>

`;

        });

    }

    catch (err) {

        console.log(err);

        alert("Unable to Load Transactions");

    }

}

loadTransactions();