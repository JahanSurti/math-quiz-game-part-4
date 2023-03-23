function addUser() {
   player1_name = document.getElementById("player1_name").value;
   player2_name = document.getElementById("player2_name").value;

   localStorage.item("player1_name", player1_name);
   localStorage.item("player2_name", player2_name);

   window.location = "game_page.html";



}


