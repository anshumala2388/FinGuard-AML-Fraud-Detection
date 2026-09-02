const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            // JWT Token Save
            localStorage.setItem("token", data.access_token);

            alert("Login Successful");

            window.location.href = "dashboard.html";

        } else {

            alert(data.detail);

        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to server.");

    }

});