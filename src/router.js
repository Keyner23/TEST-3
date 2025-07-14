import { error404 } from "./views/404";
import { createEVents, renderDashboardA,} from "./views/dashboardA";
import { renderDashboardC } from "./views/dashboardC";
import { renderHome } from "./views/home";
import { loginValidation, renderLogin } from "./views/login";
import { register, renderRegister } from "./views/register";

const routes = {
    "/":renderHome(),
    "/login":renderLogin(),
    "/register": renderRegister(),
    "/dashboardA":renderDashboardA(),
    "/dashboardC":renderDashboardC()
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
    if (path==="/register") {
        register()
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

