import { alertU } from "../js/alerts";
import { checkSessionFourAuth } from "../js/validation";



export function renderLogin() {
    return `
    <head>
    <link rel="stylesheet" href="./src/css/styles.css">
    </head>
    <body>
        <main>
            <h2>Iniciar Sesión</h2>
            <form id="form">
                <input id="email" type="email" placeholder="Email" required>
                <input id="password" type="password" placeholder="Contraseña" required>
                <button id="btn-login" type="submit">Entrar</button>
            </form>
            <div>
                <p>¿No tienes cuenta? <a href="/register" data-link>Regístrate aqui</a></p>
                <a href="/" data-link>Regresar al inicio</a>
            </div>
        </main>
    </body>
    `;
}

// VIEW OF REGISTERED LOGINS ALONG WITH THEIR VALIDATION
export function loginValidation() {
    const $email = document.getElementById("email");
    const $password = document.getElementById("password");
    const $form = document.getElementById("form");
    const urlApi = "http://localhost:3000/users";

    $form.addEventListener("submit", async function (event) {
        event.preventDefault();
        try {
            const response = await fetch(`${urlApi}?email=${$email.value}`);
            const data = await response.json();

            if (data.length !== 1) {
                alertU("El ususario no existe")
            };

            if (data[0].password === $password.value) {
                localStorage.setItem("currentUser", JSON.stringify(data[0]));
                // IF YOU ARE AN ADMIN, IT DIRECTS YOU TO THE ADMIN DASHBOARD
                if (data[0].roleId === "2") {
                    window.location.href = "/dashboardA";
                } else if (data[0].roleId === "1") {
                    window.location.href = "/dashboardC";
                }
            } else {
                alertU("Contraseña invalida")
            }
        } catch (error) {
            console.error("Error al iniciar sesión", error);
        }
    });
}
