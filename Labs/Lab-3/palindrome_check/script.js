function palindrome_check(number) {
  let rem,
    temp,
    final = 0;
  temp = number;
  let output;
  while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
  }
  if (final == temp) {
    output = "The inputed number is Palindrome";
  } else {
    output = "The inputted number is not palindrome";
  }
  return output;
}
let check = document.getElementById("bawtan");
check.addEventListener("click", (e) => {
  let hello;
  hello = parseInt(document.getElementById("input").value);
  console.log(hello);
  document.getElementById("data").textContent = palindrome_check(hello);
});
let clr = document.getElementById("btnw");
clr.addEventListener("click", (e) => {
  document.getElementById("data").textContent = "";
  document.getElementById("input").value = "";
});
