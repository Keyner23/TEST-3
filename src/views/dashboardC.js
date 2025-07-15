// FUNCTION TO RENDER HTML CLIENT STRUCTURE
export function renderDashboardC() {
    return `
    <head>
    <link rel="stylesheet" href="./src/css/dashboardA.css">
    <title>Dashboard Cliente</title>
    </head>
    <body>
        <header>
            <h1 id="header">Bienvenido cliente </h1>
            <a id="btn-exit" href="/" data-link ><button>Cerrar sesión</button></a>
        </header>

        <main>
            <section class="task-form">
                <h2>Agende su cupo aqui</h2>
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

    // FUNCTION TO RENDER EVENTS
export function showEvents() {
    const $btnEvent = document.getElementById("btn-event")
    const urlApi = "http://localhost:3000/events"
    const $btnExit = document.getElementById("btn-exit")
    $btnExit.addEventListener("click", function () {
        localStorage.removeItem("currentUser")
        window.location.href = '/'
    })

    $btnEvent.addEventListener("click", function (event) {
        event.preventDefault()
        getEvents()
    })

    function renderEvent(events) {
        const $taskList = document.getElementById("task-list")
        const eventElement = document.createElement("div")
        eventElement.classList.add("task-item")
        eventElement.innerHTML = `
            <h3>${events.name}</h3>
            <p><strong>Dia del evento:</strong> ${events.day}</p>
            <p><strong>Lugar:</strong> ${events.location}</p>
            <p><strong>Cupos:</strong> ${events.people}</p>
            <br>
            <hr>
        `
        $taskList.appendChild(eventElement)
    }
    // FUNCTION TO BRING ALL EVENTS
    async function getEvents() {
        try {
            const response = await fetch(urlApi)
            const data = await response.json()
            // console.log(data)

            const $taskList = document.getElementById("task-list")
            $taskList.innerHTML = ""
            data.forEach(event => renderEvent(event))
        } catch (error) {
            console.error("Error al obtener eventos:", error)
        }
    }
}
