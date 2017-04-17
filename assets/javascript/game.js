

// CREATE ALL THE  INITIAL VARIABLES NEEDED TO COMPLETE THE TASK
// creates a variable that the computer will have between 19-120
var computerTotal = Math.floor(Math.random()*120)+19;
console.log(computerTotal);

// This is what we add to when we select certain pictures that will have the total
// be added to. Compare this counter with the computer total.
var counter = 0;

// This creates a variable array that will add a random number for each thumbnail
var numberOptions = [0,0,0,0];
// counts the number of wins and losses
var wins = 0;
var loss = 0;

function random (arry){
	for(var i = 0; i < arry.length; i++){
		arry[i] = (Math.floor(Math.random()*12)+1);
	}
	return arry;
}
// use the function to finally add our random numbers to the var

random(numberOptions);
console.log(numberOptions);

// this function resets what whent the game is done. 
function reset(){
	counter = 0;
	computerTotal = Math.floor(Math.random()*120)+19;
	random(numberOptions);
	console.log(numberOptions);
	$('#score').text(counter);
	$('#computer-number').text(computerTotal);
	$('#dwight').attr("data-imageOfficeValue", numberOptions[0]);
	$('#jim').attr("data-imageOfficeValue", numberOptions[1]);
	$('#michael').attr("data-imageOfficeValue", numberOptions[2]);
	$('#pam').attr("data-imageOfficeValue", numberOptions[3]);
} // end of reset function


$('#computer-number').text(computerTotal);

for(var i = 0; i < numberOptions.length; i++){
	// creates a imageoffice for each loop
	var imageOffice = $("<img>");

	// this will allow to have CSS take effect on the image applying to all 
	imageOffice.addClass("office-image");

	if(i === 0){
		imageOffice.attr("src", "assets/images/dwight.GIF");
		imageOffice.attr("id", "dwight");
	} else if(i ===1){
			imageOffice.attr("src", "assets/images/jim.GIF");
			imageOffice.attr("id", "jim");
		} else if(i === 2){
				imageOffice.attr("src", "assets/images/michael.GIF");
				imageOffice.attr("id", "michael");
			} else{
					imageOffice.attr("src", "assets/images/pam.GIF");
					imageOffice.attr("id", "pam");
			} // else of the if and else statements

	// A data value will be assoicated with each image
		imageOffice.attr("data-imageOfficeValue", numberOptions[i]);

	// This will append the image one after another
	$('#pictures').append(imageOffice);

} // end of the for loop that creates all the images

// start of the click function to start the game
$('.office-image').on("click", function(){

	// we are creating a variable that will take in whatever the clicked on event was
	// and will assign it to officevale
	var officeValue = ($(this).attr("data-imageOfficeValue"));
	officeValue = parseInt(officeValue);

	// Here we are adding to the counter all the numbers that are clicked
	counter += officeValue;

	// this updates the score in the section
	$('#score').text(counter);
	console.log(counter);

	if(counter === computerTotal){
		wins++;
		$('#wins-number').text("Wins: " + wins);
			alert("you win!!!!")
			reset();
		}
		else if( counter >= computerTotal){
			loss++;
			$('#loss-number').text("Losses: " + wins);
			alert("you Lose!! Try Again")
			reset();		
			}




})








