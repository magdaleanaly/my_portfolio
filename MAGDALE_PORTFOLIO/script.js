/**script for home*/
// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = this.getAttribute("href");
    });
});

// Simple fade-in effect
window.addEventListener("load", () => {
    document.querySelector(".hero").style.opacity = "1";
});


/**script for about*/
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "auto" 
            });
        }
    });
});



/**script for contact*/

// Simple form handler
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");
    this.reset();
});

document.getElementById("submit").addEventListener("click", function() {
    alert("Message sent successfully!");
});