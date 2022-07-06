function next_page(){
    var input_val1=document.getElementById("player_1_input").value;
    var input_val2=document.getElementById("player_2_input").value;
    localStorage.setItem("player 1 name: ", input_val1);
    localStorage.setItem("player 2 name: ", input_val2);
    window.location="game_page.html";
}