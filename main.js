var index = 0;
var ind = 0;
var tester = false;


$(document).ready(function() {
	
	// BASIC OPERATIONS
	function clear() {
		$('input').val('');
	}
	function disableInput() {
		$("input").attr('disabled','disabled');
	}
	function enableInput() {
		$("input").removeAttr('disabled');
	}
	$("input").attr('disabled','disabled');
	function scrolly(){
		$(".output").stop().animate({ scrollTop: $(".output")[0].scrollHeight}, 1000);
	}
	
	//	PRESETS
	clear();
	disableInput();
	
	// THE MAIN WRITING FUNCTION
	function write(arr) {
		scrolly();
		$("<p>" + arr[index] + "</p>").hide().appendTo(".output").fadeIn(2000, function(){
			index++;
			if(index < arr.length){ 
				write(arr); 
			} else {
				index = 0;
				enableInput();
				$("input").focus();
			} 
		});
	}
	
	// WRITTEN COMMANDS FUNCTION
	$('input').keypress(function(e) {
		if(e.which == 13) {
			e.preventDefault();
			tinput = this.value;
			command = tinput.toLowerCase();
			scrolly();
			$("<p>" + tinput + "</p>").hide().appendTo(".output").fadeIn(1000, function(){
				if(command.includes("test")) {
					if(tester == false) {
						tester = true;
						write(test);
					} else {
						write(test2);
					}
				} else if(command.includes("hello") || command.includes("sup") || command.includes("good day")) {
					write(greeting);
				} else {
					write(dontknow);
				}
				
			});
			clear();
			disableInput();
		}
	});
	
	//START
	function devStart() {
		write(firstGreeting);
	}
	devStart();
});

// SPEECH BUBBLES
var firstGreeting = [
	"Hello and welcome to a chat bot",
	"architecture built in Jquery!",
	"Feel free to do what you like with this!"

]
var test = [
	"This is a test",
	"array, just to see",
	"if my function is working.",
	
]
var test2 = [
	"This is yet another test",
	"It's not that crazy interesting.",
	"It's just a test."
]
var dontknow = [
	"I don't know what you mean..."
]

var greeting = [
	"Hello there. It is nice to meet you."
]


