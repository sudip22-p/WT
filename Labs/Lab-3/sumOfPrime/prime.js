let prime1=[];
let clr = document.getElementById("clear");
clr.addEventListener("click", (e) => {
  document.getElementById("A").value = "";
  document.getElementById("B").value = "";
  document.getElementById("sum").textContent = "";
  document.getElementById("show").textContent = "";
  document.getElementById("p_show").textContent = "";
});

let calc = document.getElementById("calculate");
calc.addEventListener("click", (e2) => {
  first = parseInt(document.getElementById("A").value);
  second = parseInt(document.getElementById("B").value);
  document.getElementById("sum").textContent = "sum is:" + calculateSum(first,second);
  document.getElementById("show").textContent = "";
  document.getElementById("p_show").textContent = "";
});

document.getElementById('p_list').addEventListener('click',(e3)=>{
  document.getElementById('show').textContent="prime numbers are:";
  document.getElementById('p_show').textContent=prime1;
})

function primeCheck(num) {
  if (num <= 1) {
    return 0;
  }
  for (let i = 2; i <num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}
function calculateSum(a,b){
  let prime2=[];
  let result=0;
  let count=0;
  for(let i=a;i<=b;i++){
      if(primeCheck(i)==1){
        result+=i;
        prime2[count]=i;
        count=count+1;
      }
  }
  prime1=prime2
  return result;
}

