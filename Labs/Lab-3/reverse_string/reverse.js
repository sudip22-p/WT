function reverse(temp) {
  let reverseString = "";
  for (let i = temp.length - 1; i >= 0; i--) {
    reverseString += temp[i];
  }
  return reverseString;
}
let btn = document.getElementById("bawtan");
btn.addEventListener("click", (e) => {
  let temp = document.getElementById("input").value;
  document.getElementById("rev-data").textContent =
    "reverse of the string is " + reverse(temp);
});

let btn2 = document.getElementById("clear");
btn2.addEventListener("click", (e2) => {
  document.getElementById("input").value = "";
  document.getElementById("rev-data").textContent = "";
});
