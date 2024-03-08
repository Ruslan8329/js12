let user = {
  name: "Ruslan",
  age: 19,
  city: "Baku",
};
function howNum(num) {
  let count = 0;
  for (let key in num) {
    count += 1;
  }
  return count;
}
let newHowNum = howNum(user);
console.log(newHowNum);
