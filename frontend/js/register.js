const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (
        username === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill all fields.");

        return;

    }

    if (password.length < 6) {

        alert("Password must be at least 6 characters.");

        return;

    }

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;

    }

    const user = {

        username: username,

        email: email,

        password: password,

        role: "admin"

    };

    try {

        const response = await fetch(

            "http://127.0.0.1:8000/auth/register",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(user)

            }

        );

        const data = await response.json();

        if (response.ok) {

            alert(data.message);

            window.location.href = "login.html";

        }

        else {

            alert(data.detail);

        }

    }

    catch (error) {

        console.error(error);

        alert("Unable to connect to server.");

    }

});