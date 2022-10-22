const background = document.querySelector(".blur-bg");
const frontLayer = document.querySelector(".fake");
const callAnswer = document.querySelector(".bottom-bottom-top-left");
const callDecline = document.querySelector(".bottom-bottom-top-right");
const isRinging = !(frontLayer.classList.contains("hidden"));
const videoCall = document.querySelector(".video");
const vidCheck = videoCall.classList.contains("hidden")

const answerFunction = function () {
    background.classList.add("hidden");
    frontLayer.classList.add("hidden");
    videoCall.classList.remove("hidden");
}

const declineFunction = function () {
    background.classList.add("hidden");
    frontLayer.classList.add("hidden");
}

callAnswer.addEventListener("click", answerFunction);
callDecline.addEventListener("click", declineFunction);

