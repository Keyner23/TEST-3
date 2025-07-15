// WE HANDLE THE ALERTS

import Swal from "sweetalert2";

Swal

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export function alertU(menssage) {
    Toast.fire({
        icon: "error",
        title: menssage
    });
}