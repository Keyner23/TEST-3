export function renderDashboardA() {
    return `
    <head>
    <link rel="stylesheet" href="./src/css/dashboardA.css">
    </head>
    <body>
        <header>
            <h1 id="header">Bienvenido Admin al administrador de eventos</h1>
            <a id="logoutBtn" href="/" data-link ><button>Cerrar sesión</button></a>
        </header>

        <main>
            <section class="task-form">
                <h2>Añada los nuevos eventos aqui</h2>
                <form action="#">
                    <label for="">Nombre del evento</label>
                    <input type="text"/>
                    <label>Fecha del evento</label>
                    <input type="day"/>
                    <label>Lugar del evento</label>
                    <input type="text"/>
                    <label>Disponibilidad de personas</label>
                    <input type="number"/>
                    <button id="btn-submit" type="submit">Matricular Materia</button>
                </form>
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
