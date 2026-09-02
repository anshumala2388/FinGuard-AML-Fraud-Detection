
const token = localStorage.getItem("token");

if (!token) {
    alert("Please Login First");
    window.location.href = "login.html";
}

async function checkFraud() {

    const data = {

        Time: parseFloat(document.getElementById("time").value),
        V1: parseFloat(document.getElementById("v1").value),
        V2: parseFloat(document.getElementById("v2").value),
        V3: parseFloat(document.getElementById("v3").value),
        V4: parseFloat(document.getElementById("v4").value),
        V5: parseFloat(document.getElementById("v5").value),
        V6: parseFloat(document.getElementById("v6").value),
        V7: parseFloat(document.getElementById("v7").value),
        V8: parseFloat(document.getElementById("v8").value),
        V9: parseFloat(document.getElementById("v9").value),
        V10: parseFloat(document.getElementById("v10").value),
        V11: parseFloat(document.getElementById("v11").value),
        V12: parseFloat(document.getElementById("v12").value),
        V13: parseFloat(document.getElementById("v13").value),
        V14: parseFloat(document.getElementById("v14").value),
        V15: parseFloat(document.getElementById("v15").value),
        V16: parseFloat(document.getElementById("v16").value),
        V17: parseFloat(document.getElementById("v17").value),
        V18: parseFloat(document.getElementById("v18").value),
        V19: parseFloat(document.getElementById("v19").value),
        V20: parseFloat(document.getElementById("v20").value),
        V21: parseFloat(document.getElementById("v21").value),
        V22: parseFloat(document.getElementById("v22").value),
        V23: parseFloat(document.getElementById("v23").value),
        V24: parseFloat(document.getElementById("v24").value),
        V25: parseFloat(document.getElementById("v25").value),
        V26: parseFloat(document.getElementById("v26").value),
        V27: parseFloat(document.getElementById("v27").value),
        V28: parseFloat(document.getElementById("v28").value),
        Amount: parseFloat(document.getElementById("amount").value)

    };

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/fraud/analyze",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },

                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        document.getElementById("prediction").innerHTML =
            result.prediction;

    }

    catch (error) {

        console.log(error);

        alert("Fraud Detection Failed");

    }

}