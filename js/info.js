document.addEventListener('DOMContentLoaded', function() {
    var clicks =0;
    document.getElementById("extendButton").addEventListener("click", () => {
        clicks++;
        console.log(clicks)
        document.querySelector(".wrapper").classList.toggle("extendWrapper");
        document.querySelector(".nav").classList.toggle("extendedNav");
        if(clicks>1) {
            document.querySelector(".wrapper").classList.toggle("reverse-extendWrapper");
            document.querySelector(".nav").classList.toggle("reverse-extendedNav");
        }

    })
});