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

const timestampField = document.querySelector("#timestamp");

if (timestampField) {
    timestampField.value = new Date().toISOString();
}

const modalButtons = document.querySelectorAll(".learn-more");
const closeButtons = document.querySelectorAll(".close");

modalButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modalId = button.dataset.modal;

        const modal = document.getElementById(modalId);

        if (modal) {
            modal.style.display = "flex";
        }

    });

});


closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modal = button.closest(".modal");

        modal.style.display = "none";

    });

});

window.addEventListener("click", (event) => {

    document.querySelectorAll(".modal").forEach(modal => {

        if (event.target === modal) {
            modal.style.display = "none";
        }

    });

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal").forEach(modal => {
            modal.style.display = "none";
        });

    }

});

const heroButton = document.querySelector(".hero-btn");

if (heroButton) {

    heroButton.addEventListener("click", (event) => {

        event.preventDefault();

        const target = document.querySelector("#membership-section");

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

}

const membershipCards =
    document.querySelectorAll(".membership-card");

membershipCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {

        card.style.transition =
            "all 0.6s ease";

        card.style.opacity = "1";
        card.style.transform =
            "translateY(0)";

    }, index * 200);

});

const benefitCards =
    document.querySelectorAll(".benefit-card");

benefitCards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform =
        "translateY(30px)";

    setTimeout(() => {

        card.style.transition =
            "all .6s ease";

        card.style.opacity = "1";
        card.style.transform =
            "translateY(0)";

    }, 500 + (index * 150));

});

const fadeElements = document.querySelectorAll(
    ".benefit-card, .membership-card, .form-container"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "visible"
                );

            }

        });

    },
    {
        threshold: 0.15
    }
);

fadeElements.forEach(element => {
    observer.observe(element);
});

const joinForm =
    document.querySelector("form");

if (joinForm) {

    joinForm.addEventListener("submit",
        () => {

            const submitButton =
                joinForm.querySelector(
                    "button[type='submit']"
                );

            submitButton.textContent =
                "Submitting...";

        }
    );

}

updateFooter()
menuBtn.addEventListener("click", handleMenuBtn)