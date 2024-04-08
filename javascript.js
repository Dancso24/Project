const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });
        let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;
        let randomNumber = Math.floor(Math.random() * 3);
        let cpuImages = ["images/ko.png", "images/papir.png", "images/ollo.png"];
        cpuResult.src = cpuImages[randomNumber];
        let cpuValue = ["K", "P", "O"][randomNumber];
        let userValue = ["K", "P", "O"][index];
        let outcomes = {
            KK: "Döntetlen",
            KP: "Cpu",
            KO: "User",

            PP: "Döntetlen",
            PO: "Cpu",
            PK: "User",

            OO: "Döntetlen",
            OK: "Cpu",
            OP: "User",
        };
        let outComeValue = outcomes[userValue + cpuValue];
        result.textContent = userValue === cpuValue ? "Döntetlen" : `${outComeValue} Nyert!`;
    });
});