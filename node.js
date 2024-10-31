let userscore=0;
let compscore=0;

const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const showwinner =(userwin) => {
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you won");
        msg.innerText = "YOU WON !";
        msg.style.backgroundColor="green";
        const bed1=document.querySelector("#bodyy");
        bed1.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText="YOU LOST !";
        msg.style.backgroundColor="red";
        const bed=document.querySelector("#bodyy");
        bed.style.backgroundColor="red";
    }

};
const drawgame =() =>{
    console.log("game was draw");
    msg.innerText="GAME DRAW PLAY AGAIN !";
    msg.style.backgroundColor="yellow";
    const bed2=document.querySelector("#bodyy");
    bed2.style.backgroundColor="white";
    
    
};

const choices=document.querySelectorAll(".choice");
const genCompScore=()=>{
    const options=["rock","paper","scissor"];
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
    
};
const playgame=(choiceId) =>{
    console.log("userchoice=",choiceId);
    const compscore=genCompScore();
    console.log("computer choice=",compscore);
    if(choiceId===compscore){
        drawgame();
        
    }else{
        let userwin=true;
        if(choiceId=="rock"){
            userwin=compscore=="scissor"?true:false;
        }else if(choiceId=="scissor"){
            userwin=compscore=="paper"?true:false;
        }else {
            userwin=compscore=="rock"?true:false;
        }
        showwinner(userwin);   
    }
};

    choices.forEach((choice)  => {
        choice.addEventListener("click",() => {
            const choiceId=choice.getAttribute("id");
            console.log("choice was clicked",choiceId);
            playgame(choiceId);
        });
    });
