//creates an array containing all elements with the class 'rps'
let options = document.getElementsByClassName("rps");
let pickedImg = document.getElementById("user-img");
let houseImg = document.getElementById("house-img");
let optionDiv = document.getElementById("options-div");
let optionPicked = document.getElementById("options-picked");
let pickedOption = document.getElementById("user-picked");
let housePicked = document.getElementById("house-picked");
let outcomeContainer = document.getElementById("outcome-container");
let outcome;
let againBtn = document.getElementById("playAgain");
let outcomeText = document.getElementById("outcome-text");
let userScore = document.getElementById("number");
let score = 0;
let currentScore;
let modalDisplay = document.getElementById("modal");
let rules = document.getElementById("rules");
let closeBtn = document.getElementById("icon-div");
let h2Text;
let videoDiv = document.getElementById("video-container");
let openVideo = document.getElementById("video-title");
let videoPlayer = document.getElementById("videoPlayer");
let iframeTag = videoDiv.querySelector("iframe");
let videoTag = videoDiv.querySelector("video");
let optionSection = document.getElementById("options-section");

userScore.appendChild(document.createTextNode(score));
// for loop indexes the options array and adds an event listener to each option
for (let i = 0; i < options.length; i++) {
  //when an option's parent element is clicked the function will run
  options[i].parentElement.addEventListener("click", () => {
    currentScore = userScore.textContent;
    // userScore.appendChild(currentScore);
    //hide options and display the two picked options
    optionDiv.style.display = "none";
    optionPicked.style.display = "flex";
    outcomeContainer.style.display = "flex";
    //get src of the user's picked option and assign the new img src
    let userPick = options[i].getAttribute("src");
    pickedImg.src = userPick;
    //get the parent element of the picked img and change the style of the border and shadow to match the parent element
    let newBorder = options[i].parentElement.style.border;
    let newShadow = options[i].parentElement.style.boxShadow;
    pickedOption.style.border = newBorder;
    pickedOption.style.boxShadow = newShadow;
    //create the computer's picked option
    let h = Math.floor(Math.random() * Math.floor(options.length));
    //get src of computer's option and assign the new img src
    housePick = options[h].getAttribute("src");
    houseImg.src = housePick;
    //get the parent element of the picked img and get the border and boxShadow properties and assign the new styles
    let houseBorder = options[h].parentElement.style.border;
    let houseShadow = options[h].parentElement.style.boxShadow;
    housePicked.style.border = houseBorder;
    housePicked.style.boxShadow = houseShadow;
    //rules of the game, if any of these conditions are met, the player wins or ties
    //if the player's pick and the house pick does not match any of the set conditions than the outcome will display a loss
    if ((i == 0 && h == 1) || (i == 0 && h == 3)) {
      outcome = "YOU WIN!";
      currentScore++;
      userScore.innerHTML = currentScore;
    } else if ((i == 1 && h == 2) || (i == 1 && h == 4)) {
      outcome = "YOU WIN!";
      currentScore++;
      userScore.innerHTML = currentScore;
    } else if ((i == 2 && h == 0) || (i == 2 && h == 3)) {
      outcome = "YOU WIN!";
      currentScore++;
      userScore.innerHTML = currentScore;
    } else if ((i == 3 && h == 1) || (i == 3 && i == 4)) {
      outcome = "YOU WIN!";
      currentScore++;
      userScore.innerHTML = currentScore;
    } else if ((i == 4 && h == 0) || (i == 4 && h == 2)) {
      outcome = "YOU WIN!";
      currentScore++;
      userScore.innerHTML = currentScore;
    } else if (i == h) {
      outcome = "TIE";
    } else if (currentScore <= 0) {
      outcome = "YOU LOSE";
      userScore.innerHTML = 0;
    } else {
      outcome = "YOU LOSE";
      currentScore--;
      userScore.innerHTML = currentScore;
    }
    //add outcome value to h2 element
    h2Text = document.createTextNode(outcome);
    outcomeText.appendChild(h2Text);
    outcomeContainer.style.display = "flex";
    optionSection.style.maxWidth = "55%";
    // optionSection.style.maxWidth = "55%";
    // optionSection.style.marginTop = "1vw";
    // console.log(currentScore);
  });
}
againBtn.addEventListener("click", () => {
  optionPicked.style.display = "none";
  outcomeContainer.style.display = "none";
  optionDiv.style.display = "flex";
  outcomeText.innerHTML = " ";
  optionSection.style.maxWidth = "50vmin";
  //   optionSection.style.marginTop = "7vw";
});

rules.addEventListener("click", () => (modal.style.display = "block"));
closeBtn.addEventListener("click", () => (modal.style.display = "none"));
openVideo.addEventListener("click", () => (videoDiv.style.display = "flex"));
videoDiv.addEventListener("click", function () {
  videoDiv.style.display = "none";
  if (iframeTag) {
    let iframeSrc = iframeTag.src;
    iframeTag.src = iframeSrc;
  }
  if (videoTag) {
    videoTag.pause();
  }
});
