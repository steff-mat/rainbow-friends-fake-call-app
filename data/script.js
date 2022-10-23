function mainMenu() {
    const phoneMainMenu = document.querySelector(".phone-main-menu");
    const toCall = document.querySelector(".to-call");
    const friendsContact = document.querySelector(".contact-list");
    const contactList = function() {
        toCall.classList.remove("hidden");
        phoneMainMenu.classList.add("hidden");
        friendsContact.classList.remove("hidden");
    }
    toCall.addEventListener("click", contactList);
    
}
function incommingCall() {
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
        document.querySelector(".incomming-caller-screen").classList.add("hidden");
        document.querySelector(".phone-main-menu").classList.remove("hidden");
    }
    
    callAnswer.addEventListener("click", answerFunction);
    callDecline.addEventListener("click", declineFunction);
}
function contactListMenu() {
    const backToMainMenu = document.querySelector(".back-main-menu");
    const phoneMainMenu = document.querySelector(".phone-main-menu");
    const contactList = document.querySelector(".contact-list");
    const returnToMenu = function() {
        phoneMainMenu.classList.remove("hidden");
        contactList.classList.add("hidden");
    }
    backToMainMenu.addEventListener("click", returnToMenu);
}
function startFakeCall() {
    const starter = document.querySelector(".start-fake-call");
    const hideMenu = document.querySelector(".phone-main-menu");
    const fakeCaller = document.querySelector(".incomming-caller-screen");

    const startCall = function () {
        hideMenu.classList.add("hidden");
        fakeCaller.classList.remove("hidden");
    }
    starter.addEventListener("click", startCall);
}
function returnToMain() {
const declineCall = document.querySelector(".bottom-bottom-top-right");
const menu = document.querySelector(".phone-main-menu");
const caller = document.querySelector(".incomming-caller-screen");

const goBackToMenu = function () {
    caller.classList.add("hidden");
    menu.classList.remove("hidden");
}

declineCall.addEventListener("click", goBackToMenu);
}

function callFriend() {
    const callAnswer = document.querySelector(".b-o-a");
    const cl = document.querySelector(".contact-list");
    const caller = document.querySelector(".incomming-caller-screen");

    const answerFunction = function () {
        cl.classList.add("hidden");
        caller.classList.remove("hidden");
    }
    callAnswer.addEventListener("click", answerFunction);
}
startFakeCall();
mainMenu();
incommingCall();
contactListMenu();
returnToMain();
callFriend();