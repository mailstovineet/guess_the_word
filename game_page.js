player_1=localStorage.getItem("player 1 name: ");
player_2=localStorage.getItem("player 2 name: ");
uppercase1=player_1.toUpperCase();
uppercase2=player_2.toUpperCase();
player1_score=0;
player2_score=0;
document.getElementById("name1").innerHTML=uppercase1+" - ";
document.getElementById("name2").innerHTML=uppercase2+" - ";
document.getElementById("score1").innerHTML=player1_score;
document.getElementById("score2").innerHTML=player2_score;
document.getElementById("question").innerHTML=uppercase1+" is asking the question";
document.getElementById("answer").innerHTML=uppercase2+" is answering the question";

function send_answer(){
    var word=document.getElementById("word").value;
    var lowercase_word=word.toLowerCase();
    console.log(lowercase_word);
    charat1=lowercase_word.charAt(0);
    console.log(charat1);
    dividing=Math.floor(lowercase_word.length/2);
    charat2=lowercase_word.charAt(dividing);
    console.log(charat2);
    minus=lowercase_word.length-2;
    charat3=lowercase_word.charAt(minus);
    console.log(charat3);
    minus2=lowercase_word.length-3;
    charat4=lowercase_word.charAt(minus2);
    console.log(charat4);
    replace_charat1=lowercase_word.replace(charat1," _");
    replace_charat2=replace_charat1.replace(charat2," _");
    replace_charat3=replace_charat2.replace(charat3," _");
    replace_charat4=replace_charat3.replace(charat4," _");

    question="<h2 id='display_question'> Question "+replace_charat4+"</h2>";
    answer="<br>answer - <input id='input_answer'>";
    button="<br><br><button class='btn btn-success'onclick='check();'>Check Answer</button>";
    div=question+answer+button;
    document.getElementById("output").innerHTML=div;
    document.getElementById("word").value="";
}

var question_turn=player_1;
var answer_turn=player_2;

function check(){
check_answer=document.getElementById("input_answer").value;
check_lowercase=check_answer.toLowerCase();
if(lowercase_word=check_lowercase){
    if(answer_turn=player_1){
        player1_score=player1_score+1;
        document.getElementById("score1").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("score2").innerHTML=player2_score;
    }
}
if(question_turn=player_1){
    question_turn=player_2;
    document.getElementById("question").innerHTML=uppercase2 + " is asking the question";
    document.getElementById("answer").innerHTML=uppercase1 + " is answering the question";
}
else{
    question_turn=player_1;
    document.getElementById("question").innerHTML=uppercase1 + " is asking the question";
    document.getElementById("answer").innerHTML=uppercase2 + " is answering the question";
}
}
