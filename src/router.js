import { error404 } from "./views/404";
import { createEVents, renderDashboardA, } from "./views/dashboardA";
import { renderDashboardC, showEvents } from "./views/dashboardC";
import { renderHome } from "./views/home";
import { loginValidation, renderLogin } from "./views/login";
import { register, renderRegister } from "./views/register";

// OBJECT WITH FILE PATHS
const routes = {
    "/": renderHome(),
    "/login": renderLogin(),
    "/register": renderRegister(),
    "/dashboardA": renderDashboardA(),
    "/dashboardC": renderDashboardC()
}
// HERE THE VIEWS ARE RENDERED FROM THE JS
function render(path) {
    const view = document.getElementById("view");
    const route = routes[path] || error404();
    view.innerHTML = route;
    // WE CALL THE LOGIC OF VISITS WITH ITS FUNCTIONALITY
    if (path === "/login") {
        loginValidation()
    }
    if (path === "/dashboardA") {
        createEVents()
    }
    if (path === "/register") {
        register()
    }
    if (path === "/dashboardC") {
        showEvents()
    }
}
// THIS IS THE ROUTER THAT WILL VALIDATE IF THE ROUTE EXISTS OR NOT
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