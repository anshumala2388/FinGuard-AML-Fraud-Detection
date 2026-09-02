async function loadReport(){

    try{

        const response=await fetch(

            "http://127.0.0.1:8000/report/summary"

        );

        const data=await response.json();

        document.getElementById("totalTx").innerHTML=

        data.total_transactions;

        document.getElementById("fraudAlerts").innerHTML=

        data.fraud_alerts;

    }

    catch(error){

        console.log(error);

        alert("Unable to Load Report");

    }

}

loadReport();