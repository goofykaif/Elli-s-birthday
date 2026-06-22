const text =
"✨ I made this little website just for you. Happy Birthday Elli ✨";

let i = 0;

function typeWriter() {

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 50);
    }
}

typeWriter();

document
.getElementById("giftBtn")
.addEventListener("click", () => {

    alert("IT WORKS!");

    document
    .getElementById("letter")
    .classList
    .remove("hidden");

});

for(let i=0;i<120;i++){

    let star = document.createElement("div");

    star.classList.add("star");

    star.style.width = Math.random()*3 + "px";

    star.style.height = star.style.width;

    star.style.left = Math.random()*100 + "%";

    star.style.top = Math.random()*100 + "%";

    star.style.animationDuration =
        (Math.random()*3 + 2) + "s";

    document
    .querySelector(".stars")
    .appendChild(star);
}