const menuBtn = document.querySelector("#menu")
const nav = document.querySelector("#nav-bar")
const lastModified = document.querySelector("#last-modified")
const currentYear = document.querySelector("#currentyear")

function handleMenuBtn(){
    if(!menuBtn.classList.contains("show")){
        nav.classList.add("show")
        menuBtn.classList.add("show");
        return
    }
    else{
        nav.classList.remove("show")
        menuBtn.classList.remove("show");
        return
    }
}

function updateFooter(){
    const date = new Date()
    currentYear.textContent = date.getFullYear()
    lastModified.textContent = document.lastModified
    return
}

document.addEventListener("DOMContentLoaded", () => {


    const timestampField = document.getElementById("timestamp");

    if (timestampField) {
        const now = new Date();
        timestampField.value = now.toISOString();
    }

    const modalButtons = document.querySelectorAll(".join-page-modal-btn");
    const closeButtons = document.querySelectorAll(".close-modal");

    modalButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-modal");
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.showModal();
            }
        });
    });

    closeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const modal = btn.closest("dialog");

            if (modal) {
                modal.close();
            }
        });
    });

    const dialogs = document.querySelectorAll("dialog");

    dialogs.forEach((dialog) => {
        dialog.addEventListener("click", (e) => {
            const rect = dialog.getBoundingClientRect();

            const isClickOutside =
                e.clientX < rect.left ||
                e.clientX > rect.right ||
                e.clientY < rect.top ||
                e.clientY > rect.bottom;

            if (isClickOutside) {
                dialog.close();
            }
        });
    });

});

updateFooter()
menuBtn.addEventListener("click", handleMenuBtn)