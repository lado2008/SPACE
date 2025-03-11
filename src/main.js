import './style.css'

document.addEventListener("DOMContentLoaded", function () {
    fetch("/public/data/planets.json") 
        .then(response => response.json())
        .then(planets => {
            const navLinks = document.querySelectorAll(".navbar ul li a")
            const planetName = document.querySelector(".planet_name")
            const planetImage = document.querySelector(".planet_image")

            navLinks.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault()

                    const selectedPlanet = planets.find(planet => planet.name.toLowerCase() === link.textContent.toLowerCase())

                    if (selectedPlanet) {
                        planetName.textContent = selectedPlanet.name.toUpperCase()
                        planetImage.src = selectedPlanet.image
                        planetImage.alt = selectedPlanet.name
                    }
                });
            });
        })
        .catch(error => console.error("Error loading planets:", error))
});


