
function showStuff(el) {
	let elementID = document.getElementById(el);
	let x;
	for (i=0; i<elementID.length; i++) {
		if (elementID[i].selected=== true) {
			x = elementID[i].text;
		}
	}
	// console.log(x)
	return x;
}


function showMore(el) {
	let elementID = document.getElementsByName(el);
	//console.log(elementID.length);
	let mycheck = "";
	for (i=0; i<elementID.length; i++) {
			//console.log(elementID[i].checked);
			//console.log(elementID[i].value);
		if (elementID[i].checked === true) {
			mycheck = mycheck + elementID[i].value + '<br>';
		}
	}
	return mycheck;
}


function evaluatePage() {
	let feedbackState = showStuff("state");
	let feedbackHome = showStuff("home");
	let feedbackLight = showMore('bulb');
	document.getElementById("output").innerHTML = feedbackState +'<br>' +feedbackHome +'<br>'+ feedbackLight;
}
