document.addEventListener("DOMContentLoaded", function () {
    let backgroundMusic = document.getElementById("backgroundMusic");

    if (!backgroundMusic) {
        backgroundMusic = document.createElement("audio");
        backgroundMusic.id = "backgroundMusic";
        backgroundMusic.loop = true;
        backgroundMusic.innerHTML = '<source src="music/its you.mp3" type="audio/mp3">';
        document.body.appendChild(backgroundMusic);
    }

    // Jika sebelumnya musik sedang dimainkan, lanjutkan memutarnya
    if (sessionStorage.getItem("isPlaying")) {
        backgroundMusic.play();
    }

    backgroundMusic.addEventListener("play", function () {
        sessionStorage.setItem("isPlaying", true);
    });

    backgroundMusic.addEventListener("pause", function () {
        sessionStorage.removeItem("isPlaying");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const response = document.getElementById("response");

    if (yesBtn && noBtn) {
        yesBtn.addEventListener("click", function () {
            response.innerText = "Nah sudah ketebak pasti kamu pilih ini, Makasih Love uuuuu 💗";
            response.classList.remove("hidden");
        });

        noBtn.addEventListener("mouseover", function () {
            const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
            const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }
});
