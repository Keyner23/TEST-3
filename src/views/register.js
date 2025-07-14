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
                <button type="submit">Registrarse</button>
            </form>
            <div>
                <p>¿Ya tienes cuenta aqui?<a href="/login" data-link>Inicia sesión</a></p>
                <a href="/" data-link>Regresar al inicio</a>
            </div>
        </main>
    </body>
    `;
}
