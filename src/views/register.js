import { alertU } from "../js/alerts";

export function renderRegister() {
    return `
    <head>
    <link rel="stylesheet" href="./src/css/styles.css">
    </head>
    <body>
        <main>
            <h2>Crear Cuenta</h2>
            <form id="register-form">
                <input id="name" type="text" placeholder="Nombre completo" required>
                <input id="email" type="email" placeholder="Email" required>
                <input id="password" type="password" placeholder="Contraseña" required>
                <button id="btn-register" type="submit">Registrarse</button>
            </form>
            <div>
                <p>¿Ya tienes cuenta aqui?<a href="/login" data-link>Inicia sesión</a></p>
                <a href="/" data-link>Regresar al inicio</a>
            </div>
        </main>
    </body>
    `;
}

// THIS IS THE USER REGISTRATION VIEW
export function register() {
    const $name = document.getElementById("name")
    const $email = document.getElementById("email")
    const $password = document.getElementById("password")
    const $btnRegister = document.getElementById("btn-register")
    const urlApi = "http://localhost:3000/users"

    $btnRegister.addEventListener("click", function (event) {
        event.preventDefault()

        registerUser()
    })

    async function registerUser() {
        try {
            // WE USE THE POST METHOD TO ENTER THE NEW USER
            const newUser = {
                name: $name.value,
                email: $email.value,
                password: $password.value,
                roleId: "1"
            }
            let responsive = await fetch(urlApi, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            })
            // IF IT COULD BE CREATED CORRECTLY IT WILL BE SENT TO THE LOGIN
            if (responsive.status == 201) {
                window.location.href = "/login"
            } else {
                alertU("algo salio mal")
                throw new Error("error en la peticion POST")
            }
        } catch (error) {
            console.error(error.menssage)
        }
    }

}
