let character = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lenght = 10;

document.querySelector("span").onclick = function (e) {
  let possword = "";
  for (let i = 0; i < lenght; i++) {
    possword += character[Math.floor(Math.random() * character.length ) ]
  }
  document.querySelector(".possword").innerHTML = possword;
  console.log(possword);
};
