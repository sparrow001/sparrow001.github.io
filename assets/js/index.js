document.querySelectorAll(".site-item").forEach((item) => {
    item.addEventListener("click", function() {
        window.location.href = item.getAttribute("data-url");
    });
    }
);