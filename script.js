let score={
    win:0,
    lost:0,
    tie:0,
};


document.querySelector('#msg').innerText='Select any of the button to play';

const wonScore=JSON.parse(localStorage.getItem('score'));
if(localStorage.getItem('score'))
    {
        displayScore();
    }






function generateComputerChoice(){
    
    let no=Math.random()*3;

    if(no<=1){
        return'Stone';
        
        
    }
    else if(no>1 && no <2){
        return 'Paper';
       
    }
    else{
        return 'Scissor';
    }
       
}


function display(choiceU,choiceC){
    if(choiceU==choiceC){
        score.tie++;
        localStorage.setItem('score',JSON.stringify(score));
        document.querySelector('#msg').innerText=`You both have choosen: ${choiceU} \nDRAW TRY AGAIN`;
        displayScore();
        
        

    }
    else if(choiceU=='Stone'){
        if(choiceC=='Paper'){
            score.lost++;
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('#msg').innerText=`Your Choice: ${choiceU}\n Computer Choice: ${choiceC} \n YOU LOST`;
            displayScore();
           

        }
        else{
            score.win++;
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('#msg').innerText=`Your Choice: ${choiceU}\n Computer Choice: ${choiceC} \n YOU WON`;
            displayScore();
            
        }

    }
    else if(choiceU=='Paper'){
        if(choiceC=='Scissor'){
            score.lost++;
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('#msg').innerText=`Your Choice: ${choiceU}\n Computer Choice: ${choiceC} \n YOU LOST`;
            displayScore();
        }
        else{
            score.win++;
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('#msg').innerText=`Your Choice: ${choiceU}\n Computer Choice: ${choiceC} \n YOU WON`;
            displayScore();

        }

    }
    else if(choiceU=='Scissor'){
        if(choiceC=='Stone'){
            score.lost++;
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('#msg').innerText=`Your Choice: ${choiceU}\n Computer Choice: ${choiceC} \n YOU LOST`;
            displayScore();

        }
        else{
            score.win++;
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('#msg').innerText=`Your Choice: ${choiceU}\n Computer Choice: ${choiceC} \n YOU WON`;
            displayScore();

        }

    }



}    

function scoreClear(){
    localStorage.clear();
    displayScore();
    document.querySelector('#msg').innerText=`Select any of the button to play`;

}

function displayScore(){
    const scoreString=localStorage.getItem('score');
    if(scoreString){
        const score=JSON.parse(scoreString);

        const scoreWin=score.win;
        const scoreLost=score.lost;
        const scoreTie=score.tie;

        document.querySelector('#display-score').innerText=`Win: ${scoreWin}  Lost:${scoreLost}  Tie:${scoreTie}`;

    }
    else{
        score.win=0;
        score.lost=0;
        score.tie=0;
        document.querySelector('#display-score').innerText=`Win: ${score.win}  Lost:${score.lost}  Tie:${score.tie}`;
        // document.querySelector('#display-score').innerText=`Win:0  Lost:0  Tie:0`;
    }
    

}
