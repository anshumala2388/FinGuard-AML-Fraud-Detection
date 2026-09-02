async function uploadCSV() {

    const fileInput = document.getElementById("csvFile");

    if(fileInput.files.length===0){

        alert("Please Select CSV File");

        return;

    }

    const formData=new FormData();

    formData.append("file",fileInput.files[0]);

    try{

        const response=await fetch(

        "http://127.0.0.1:8000/upload/csv",

        {

            method:"POST",

            body:formData

        });

        const data=await response.json();

        document.getElementById("result").innerHTML=`

<h2 style="color:green;">
${data.message}
</h2>

<p>

<b>Total Rows :</b>

${data.total_rows}

</p>

<p>

<b>Fraud Detected :</b>

<span style="color:red;font-weight:bold;">

${data.fraud_detected}

</span>

</p>

`;

    }

    catch(error){

        console.log(error);

        alert("Upload Failed");

    }

}