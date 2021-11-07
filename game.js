 function send(){
    number2=document.getElementById("number2").value;
    number1=document.getElementById("number1").value;
    actual_answer=parseInt(number1)*(number2);

    question_number= "<h4>" + number1 + "X" + number2 + "</h4>";
input_box="<br>Answer : <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row=question_number + input_box + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}
question_turn="Player 1";
answer_turn="Player 2";
function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answer_turn=="Player 1"){
            update_player1_score = player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }
        else{
            update_player2_score = player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
        }
        if(question_turn=="Player 1"){
            question_turn="Player 2";
            document.getElementById("player_question").innerHTML="Question Turn:"+player2name;
        }
        else{
            question_turn="Player 1";
            document.getElementById("player_question").innerHTML="Question Turn:"+player1name;  
        }
    }
}