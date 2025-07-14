import { router } from "./router.js";

const app = document.getElementById("app");

//el contenido dinámico
app.innerHTML = `
    <div id="view"></div>
`;

router(); // Inicializar router


