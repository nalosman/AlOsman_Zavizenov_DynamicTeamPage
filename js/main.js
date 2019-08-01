// VARIABLES
const teamData = [
  ['images/nourHeadshot.jpg','Nour Al-Osman', 'Designer','• Studying: Interactive Media Design<br>• On the netflix queue: The Umbrella Academy, The Walking Dead<br>• Fav Food: Fettucine Alfredo<br>• Loves: Starbucks Cold Brew and her cat Peaches'],
  ['images/glebHeadshot.jpg','Gleb Zavizenov', 'Developer', '• Best Front-End Developer in the world!<br>• Studying "Interactive Media Design"<br>• Fan of technologies and startups<br>• Favourite TV Serial - "Silicon Valley"']
],
centerBtn = document.querySelector(".center-button"),
centerText = document.querySelector(".center-text"),
leftContent = document.querySelector("#leftCont"),
rightContent = document.querySelector("#rightCont"),
aboutBtns = document.querySelectorAll(".aboutButton"),
secondSection = document.querySelector(".secondBox"),
infoImage = document.querySelector(".info-left img"),
infoName = document.querySelector(".info-right_name"),
infoTitle = document.querySelector(".info-right_title"),
infoDescription = document.querySelector(".info-right_description"),
roundBtns = document.querySelectorAll(".round-button");

let working = true;

// Functions
function changeImages(){
  if (working){
    centerBtn.style.backgroundImage = "url('images/beach.jpg')";
    leftContent.style.backgroundImage = "url('images/nourOutside.jpg')";
    rightContent.style.backgroundImage = "url('images/glebOutside.jpg')";
    secondSection.style.backgroundImage = "url('images/beach.jpg')";
    centerText.textContent = "Chilling Mode";
    working = false;
  }else if(working === false){
    centerBtn.style.backgroundImage = "url('images/office.jpg')";
    leftContent.style.backgroundImage = "url('images/nourProfile.jpg')";
    rightContent.style.backgroundImage = "url('images/glebProfile.jpg')";
    secondSection.style.backgroundImage = "url('images/office.jpg')";
    centerText.textContent = "Working Mode";
    working = true;
  }
};

function displayInfo(){
  secondSection.classList.add("secondBox-active");
  let personToDisplay = this.dataset.ref;
  infoImage.src = teamData[personToDisplay][0];
  infoName.textContent = teamData[personToDisplay][1];
  infoTitle.textContent = teamData[personToDisplay][2];
  infoDescription.innerHTML = teamData[personToDisplay][3];
  window.scrollTo(0,window.scrollY+1800);
};

function scrollToTop(){
  window.scrollTo(0,window.scrollY-1800);
  secondSection.classList.remove("secondBox-active");
}

// Event Listeners
centerBtn.addEventListener('click', changeImages);
aboutBtns.forEach(aboutButton => aboutButton.addEventListener('click', displayInfo));
roundBtns.forEach(roundBtn => roundBtn.addEventListener('click', scrollToTop));