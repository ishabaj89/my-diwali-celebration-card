const celebrateButton =
    document.getElementById("celebrateButton");

const details =
    document.getElementById("details");

const fireworks =
    document.getElementById("fireworks");


celebrateButton.addEventListener("click", function () {

    /* Hide button */
    celebrateButton.style.display = "none";


    /* Change text */
    document.querySelector(".click-text").textContent =
        "✨ Happy Diwali! ✨";


    /* Fireworks */
    createFireworks();


    /* Show invitation after fireworks */

    setTimeout(function () {

        details.classList.add("show");

        details.scrollIntoView({
            behavior: "smooth"
        });

    }, 1800);

});


function createFireworks() {

    const colors = [
        "#ff4081",
        "#ffc107",
        "#40c4ff",
        "#69f0ae",
        "#ff7043",
        "#e040fb"
    ];


    for (let i = 0; i < 18; i++) {

        const firework =
            document.createElement("div");


        firework.classList.add("firework");


        /* Random position */

        firework.style.left =
            Math.random() * 90 + 5 + "%";


        firework.style.top =
            Math.random() * 55 + 5 + "%";


        /* Random color */

        const mainColor =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        firework.style.background =
            mainColor;


        /* Firework rays */

        firework.style.boxShadow = `

            0 -50px ${mainColor},

            35px -35px ${colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ]},

            50px 0 ${colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ]},

            35px 35px ${colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ]},

            0 50px ${colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ]},

            -35px 35px ${colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ]},

            -50px 0 ${colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ]},

            -35px -35px ${colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ]}
        `;


        fireworks.appendChild(firework);


        /* Remove fireworks */

        setTimeout(function () {

            firework.remove();

        }, 1600);

    }

}