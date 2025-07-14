
export function renderHome() {
    return `
    <head>
    <link rel="stylesheet" href="./src/css/home.css">
    </head>
    <body>
        <header>
            <h2>Bienvenido</h2>
            <h1>Aqui puedes realizar tus reservas 🎟️</h1>
        </header>
        <main>
            <div>
                <a href="/login" data-link>Ingresar</a>
                <a href="/register" data-link>Registrarse</a>
            </div>
        </main>
    </body>
    `;
}
