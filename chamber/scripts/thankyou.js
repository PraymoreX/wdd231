document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);

    const firstName = params.get("firstName");
    const lastName = params.get("lastName");
    const email = params.get("email");
    const phone = params.get("phone");
    const organization = params.get("organization");
    const membership = params.get("membership");
    const timestamp = params.get("timestamp");

    const output = document.getElementById("submissionData");

    if (output) {
        output.innerHTML = `
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Membership Level:</strong> ${membership}</p>
            <p><strong>Submitted At:</strong> ${timestamp}</p>
        `;
    }

});