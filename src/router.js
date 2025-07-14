import { error404 } from "./views/404";
import { createEVents, renderDashboardA,} from "./views/dashboardA";
import { renderHome } from "./views/home";
import { loginValidation, renderLogin } from "./views/login";
import { renderRegister } from "./views/register";

const routes = {
    "/":renderHome(),
    "/login":renderLogin(),
    "/register": renderRegister(),
    "/dashboardA":renderDashboardA()
}

function render(path) {
    const view = document.getElementById("view");
    const route = routes[path] || error404();
    view.innerHTML = route;

    if (path==="/login") {
        loginValidation()
    }
    if (path==="/dashboardA") {
        createEVents()
    }
    
}

export function router() {
    document.body.addEventListener("click", (event) => {
        if (event.target.matches("[data-link]")) {
            event.preventDefault();
            const path = event.target.getAttribute("href");// Obtiene la ruta del enlace
            history.pushState({}, "", path);
            render(path);// Llama a una función render para mostrar el contenido correspondiente
        }
    });
    render(location.pathname);
}

