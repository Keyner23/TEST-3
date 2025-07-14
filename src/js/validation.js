export function checkSessionFourAuth(route) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if (currentUser != null) {
        window.location.href = route
    }
}