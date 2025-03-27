document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll(".open-modal-button");
    const closeButtons = document.querySelectorAll(".close-modal");

    // Open modal
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal-id");
            const modal = document.getElementById(modalId);
            console.log(modal)
            if (modal) {
                document.querySelectorAll(".modal.active").forEach(openModal => {
                    openModal.classList.remove("active");
                });
                modal.classList.add("active");
            }
        });
    });

    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest(".modal");
            if (modal) {
                modal.classList.remove("active");
            }
        });
    });

    // Close when clicking outside (on the overlay)
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("active");
            }
        });
    });
});