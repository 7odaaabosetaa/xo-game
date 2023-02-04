let turn = 'x';
let dash = document.querySelector(".top");
let squares =[];
let squares2=[];
let endx = document.querySelector(".end #x");
let endo = document.querySelector(".end #o");
function game(id) {
    let element = document.getElementById(id);
    if (turn === "x" && element.innerHTML == '') {
        element.innerHTML = 'x';
        turn = "o";
        dash.innerHTML="o"
    } else if (turn === "o" && element.innerHTML == '') {
        element.innerHTML = 'o';
        turn = "x";
        dash.innerHTML="x";
    }
    winner();
};


function win(num1,num2,num3){   
    dash.innerHTML=`${squares[num1]} Winner`;
    document.getElementById("item" + num1).style.backgroundColor="black";
    document.getElementById("item" + num2).style.backgroundColor="black";
    document.getElementById("item" + num3).style.backgroundColor="black";
    squares2[1].setAttribute("onclick","");
    squares2[2].setAttribute("onclick","");
    squares2[3].setAttribute("onclick","");
    squares2[4].setAttribute("onclick","");
    squares2[5].setAttribute("onclick","");
    squares2[6].setAttribute("onclick","");
    squares2[7].setAttribute("onclick","");
    squares2[8].setAttribute("onclick","");
    squares2[9].setAttribute("onclick","");
    setInterval(() => {
        dash.innerHTML+=`.`;
    }, 1000);
    setTimeout(()=>{
        location.reload()
    },3000)
    if(window.sessionStorage.getItem(squares[num1])=== null){
       window.sessionStorage.setItem(squares[num1],0)
    }
    window.sessionStorage.setItem(squares[num1],parseInt(window.sessionStorage.getItem(squares[num1])) + 1);
    // if(squares[num1] = "x"){
    //    
    //         }else if(squares[num1] = "o"){
    //             
    //         }
        
}
endx.innerHTML+= window.sessionStorage.getItem("x");
endo.innerHTML+= window.sessionStorage.getItem("o")
if(endo.innerHTML.includes("null")){
    endo.innerHTML="o:"
}


function winner() 
{
    for (i =1; i < 10;i++){
    squares[i] = document.getElementById("item" + i).innerHTML;
    squares2[i]= document.getElementById("item" + i);
    }
        if(squares[1] == squares[2] && squares[2] == squares[3] && squares[3] !=""){
            win(1,2,3)
        }else if(squares[4] == squares[6] && squares[6] == squares[5] && squares[6] !=""){
            win(6,4,5)
        }
        else if(squares[8] == squares[7] && squares[9] == squares[7] && squares[9] !=""){
            win(9,7,8)
        }
        // ###############################################################
        else if(squares[1] == squares[4] && squares[7] == squares[1] && squares[1] !=""){
            win(1,4,7)
        }else if(squares[2] == squares[5] && squares[8] == squares[2] && squares[8] !=""){
            win(2,5,8)
        }else if(squares[3] == squares[6] && squares[9] == squares[3] && squares[3] !=""){
            win(3,6,9)
        }
        else if(squares[5] == squares[1] && squares[9] == squares[1] && squares[1] !=""){
            win(5,1,9)
        }else if(squares[5] == squares[3] && squares[3] == squares[7] && squares[3] !=""){
            win(5,3,7)
        }
    if(squares[1] !="" &&squares[2] !="" &&squares[3] !="" &&squares[4] !="" &&squares[5] !="" &&squares[6] !="" &&squares[7] !="" &&squares[8] !="" &&squares[9] !="" ){
    location.reload()
    }}