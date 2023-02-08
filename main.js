// sets count to 1
let count = 1;

// changes color of text when button is clicked
function changeText() {

	// the text within the right column of the page
	let text = document.getElementById("text");

	// determines if count is even or odd
	if (count % 2 === 0) {
		// when count is even, color is black
		text.style.color = "black";
	} else {
		// when count is odd, color is red
		text.style.color = "red";
	}

	// adds 1 to the count after each click
	count++;
}