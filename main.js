//print
console.log("hello world");

// variables

// constants
const myCourse = "DS4200";
console.log(myCourse);

let season = "Winter"
console.log(season);

season = "Spring";
console.log(season);

// types
console.log(typeof(season));

let hwDue = true;
console.log(typeof(hwDue));

let faveNum = 45;
console.log(typeof(faveNum));

// loosely types language
faveNum = "six";
console.log(typeof(faveNum));

// functions
function tenTimes(num) {
	let result = num * 10;
	return result;
}

let ans = tenTimes(45);
console.log(ans);

// button function
// function buttonClicked() {
//	console.log("button was clicked!");

//	let newText = "Button was clicked!"

	// select the element
//	let buttonDiv = document.getElementById("button-div");

//	buttonDiv.innerHTML = newText;
//}

// sets count to 0
let count = 0;

// updates count
function buttonCount() {
	
	count++

	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = "Number of times button clicked: " + count;
}