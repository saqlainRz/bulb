function bulbOn() {
  let the = document.querySelector(".bulboff");
  the.setAttribute("src", "pic_bulbon.gif");
}

function bulbOff() {
  let the = document.querySelector(".bulboff");

  the.setAttribute("src", "pic_bulboff.gif");
}
let letter =
  "this is the wolrd where i would like to raise as high as i dream like my dream world";

const wovel = /[aeiou]/g;
var test = letter.match(wovel);
console.log(test);

const t = test.filter((t) => t === "i");
console.log(t);
let c = t.join();
console.log(c);

let fruits = ["saqlain", "adri"];

console.log(...fruits);
let newfruits1 = fruits;
newfruits1.push("sss");
console.log(newfruits1);
