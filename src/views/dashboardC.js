export function renderDashboardC() {
    return `
    <head>
    <link rel="stylesheet" href="./src/css/dashboardA.css">
    </head>
    <body>
        <header>
            <h1 id="header">Bienvenido cliente </h1>
            <a id="logoutBtn" href="/" data-link ><button>Cerrar sesión</button></a>
        </header>

        <main>
            <section class="task-form">
                <h2>Añada los nuevos eventos aqui</h2>
                <button id="btn-event" type="submit">Ver eventos</button>
            </section>

            <section  id="task-list">
                <!--mostrar las tareas -->
            </section>
            
        </main>
        <footer>
            <p>Sistema creado por <a href="https://github.com/Keyner23">Keyner Barrios</a></p>
        </footer>
    </body>
    `}