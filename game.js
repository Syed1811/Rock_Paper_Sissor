//GLOBAL VARIABLES
var pc,cc,ps=0,cs=0;

//DOCUMENT LOADED FUNCTION
document.addEventListener("DOMContentLoaded", function(event) {

	//NAVBAR
	$('span.navbtn').click(function(){
  		$('ul.nav').slideToggle();
 	});    

 	//INITIAL SCORES
 	document.getElementById('ps').innerHTML = ps;
 	document.getElementById('cs').innerHTML = cs;
});


	//GAME FUNCTION
	function action(){

		//GETTING VALUES
		if(document.getElementById('r').checked)
		{
			pc = 1;
		}

		else if(document.getElementById('p').checked)
		{
			pc = 2;
		}

		else if(document.getElementById('s').checked)
		{
			pc = 3;
		}

		else
		{
			pc=0;
		}


		//COMPUTER'S CALL
		cc = Math.floor((Math.random() * 3) + 1);


		//GAME ALGORITHM	

		if(pc==0)		
		{
			document.getElementById('res').innerHTML = "Please select your call!";
		}

		else
		{

			if(pc==1 && cc==3)
			{
				document.getElementById('res').innerHTML = "Player Wins!";
				ps++;
			}

			else if(pc==2 && cc==1)
			{
				document.getElementById('res').innerHTML = "Player Wins!";
				ps++;
			}

			else if(pc==3 && cc==2)
			{
				document.getElementById('res').innerHTML = "Player Wins!";
				ps++;
			}

			else if(pc==cc)
			{
				document.getElementById('res').innerHTML = "Draw!";
			}

			else
			{
				document.getElementById('res').innerHTML = "Computer Wins!";
				cs++;
			}
		}

		 //INITIAL SCORES
 		document.getElementById('ps').innerHTML = ps;
 		document.getElementById('cs').innerHTML = cs;

	}


	//RESET FUNCTION
	function reset(){
		ps=0;
		cs=0;

		//INITIAL SCORES
 		document.getElementById('ps').innerHTML = ps;
 		document.getElementById('cs').innerHTML = cs;
 		document.getElementById('res').innerHTML = "";

 		//SENDING NAV BACK
 		$('ul.nav').slideToggle();
	}


	//QUIT FUNCTION
function quit() {
  var quitMessage = "Are you sure you want to quit the game? You can close this window manually using the browser's close button.";
  if (confirm(quitMessage)) {
    window.close();
  }
}

	

