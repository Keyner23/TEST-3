
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
                    <label for="" >Nombre del evento</label>
                    <input type="text" id="nameE"/>
                    <label>Fecha del evento</label>
                    <input type="day" id="dayE"/>
                    <label>Lugar del evento</label>
                    <input type="text" id="location" />
                    <label>Disponibilidad de personas</label>
                    <input type="number" id="people" />
                    <button id="btn-submit" type="submit">Crear evento</button>
                    <button id="btn-event" type="submit">Ver eventos</button>
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





export function createEVents() {

    const $btnSubmit = document.getElementById("btn-submit")
    const $name = document.getElementById("nameE")
    const $day = document.getElementById("dayE")
    const $location = document.getElementById("location")
    const $people = document.getElementById("people")
    const $btnEvent = document.getElementById("btn-event")
    const $delete = document.getElementById("btn-delete")
    const urlApi = "http://localhost:3000/events"

    $btnSubmit.addEventListener("click", function (event) {
        event.preventDefault()
        newEvents()
        clearInputs()
    })

    $btnEvent.addEventListener("click", function (event) {
        event.preventDefault()
        getEvents()
    })
    async function newEvents() {
        const newEvent = {
            name: $name.value,
            day: $day.value,
            location: $location.value,
            people: $people.value,
        }
        let responsive = await fetch(urlApi, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newEvent)
        })
        if (responsive.status == 201) {
            renderEvent(newEvent)
        } else {
            // alert("no se creo, intente de nuevo")
            throw new Error("error en la peticion POST")
        }
    }
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
            <button id="btn-delete">Eliminar</button>
            <hr>
        `
        $taskList.appendChild(eventElement)
    }

    function clearInputs() {
        $name.value = ""
        $day.value = ""
        $location.value = ""
        $people.value = ""
    }

    async function getEvents() {
        try {
            const eventElement = document.createElement("div")
            let response = await fetch(urlApi)
            let data = await response.json()
            console.log(data)
        } catch (error) {
            console.log("error aqui")
        }
    }
}

