async function loadGraph() {

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/graph/network"
        );

        const data = await response.json();

        const nodes = [];

        data.nodes.forEach(node => {

            nodes.push({

                id: node,

                label: node,

                title: node,

                shape: "dot",

                size: 30,

                font: {
                    size: 18,
                    color: "#ffffff"
                },

                color: {
                    background: "#2563eb",
                    border: "#1d4ed8"
                }

            });

        });

        const edges = [];

        data.edges.forEach(edge => {

            edges.push({

                from: edge[0],

                to: edge[1],

                label: "₹ " + edge[2].amount,

                arrows: "to",

                color: "#2563eb",

                font: {
                    align: "middle",
                    size: 14
                }

            });

        });

        const container = document.getElementById("network");

        const graphData = {

            nodes: new vis.DataSet(nodes),

            edges: new vis.DataSet(edges)

        };

        const options = {

            autoResize: true,

            layout: {
                improvedLayout: true
            },

            physics: {

                enabled: true,

                barnesHut: {
                    gravitationalConstant: -5000,
                    springLength: 180
                }

            },

            interaction: {

                hover: true,

                navigationButtons: true,

                zoomView: true,

                dragView: true

            }

        };

        new vis.Network(
            container,
            graphData,
            options
        );

    }

    catch (error) {

        console.log(error);

        alert("Unable to Load Graph");

    }

}

loadGraph();


async function loadAML(){

    try{

        const response = await fetch(
            "http://127.0.0.1:8000/graph/aml"
        );

        const data = await response.json();

        const table = document.getElementById("amlTable");

        table.innerHTML = "";

        if(data.suspicious_patterns.length===0){

            table.innerHTML=`
            <tr>

            <td colspan="2"
            style="text-align:center;color:green;font-weight:bold">

            No Suspicious Pattern Found

            </td>

            </tr>
            `;

            return;
        }

        data.suspicious_patterns.forEach(item=>{

            table.innerHTML += `

            <tr>

            <td>${item.type}</td>

            <td>${item.path}</td>

            </tr>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

loadAML();