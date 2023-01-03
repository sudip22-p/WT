
let display = "";
let temp;//for DEL 

let buttons = document.getElementsByTagName('button');
Array.from(buttons).forEach( (button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            try{
                display=eval(display);
                if(display>1000000000000){
                    document.getElementById('input').value="Math Error!";
                    alert("try inputting number having digit less than 12. ");
                }
                else{
                    document.getElementById('input').value=display;
                }
            }
            catch{
                document.getElementById('input').value='ERROR!!!';
                alert("don't perform invalid operations.....");
            }
        }
        else if (e.target.innerHTML=='AC'){
            display="0";
            document.getElementById('input').value=display;
            display=" ";
        }
        else if (e.target.innerHTML=='DEL'){
            display=temp.slice(0,-1);
            temp=display;
            document.getElementById('input').value=display;
        }
        else{
            display+=e.target.innerHTML;
            temp=display;
        document.getElementById('input').value=display;
        }
    })
})

