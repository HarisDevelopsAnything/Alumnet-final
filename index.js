window.onload = () => catchyHeading();
async function catchyHeading() {
    defaultLength = document.getElementById("infoText").innerHTML.length;
    const phrases = [
      " people unite",
      " alumni contribute",
      " donations make an impact",
      " memories of college come back",
      " your actions matter",
      " jobs are found",
      " unity is strength",
      " connections are forged",
      " everything is accessible",
      " information is shared",
      " we advance together",
      " nostalgia is induced",
    ];
    let phrase = 0;
    while (true) {
      await typeWriter(phrases[phrase]);
      await deTypeWriter(defaultLength);
      phrase++;
      if (phrase == phrases.length) phrase = 0;
    }
  }
  async function typeWriter(phrase) {
    heading = document.getElementById("infoText");
    for (let i = 0; i < phrase.length; i++) {
      heading.innerHTML += phrase.charAt(i);
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
  }
  async function deTypeWriter(len) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    heading = document.getElementById("infoText");
    for (let i = heading.innerHTML.length; i >= len; i--) {
      heading.innerHTML = heading.innerHTML.substring(0, i);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }
const register = () => {
  window.location.href='register.html';
  console.log('done');
}
const getJobList = () => {

}
