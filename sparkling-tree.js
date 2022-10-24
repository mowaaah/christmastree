// function treeBalls () {
// let rows = 20;
// let tree_balls = document.getElementById("spark_tree").innerHTML = "*";

// for (let i = 0; i <= rows; i++) {
// 	for (let k = 0; k < i; k++) {
// 		document.write("&nbsp;");
// 		rows += "*"
// 		// alert(tree_balls);
// 	}
// 	document.write("<br>");
// }
// }


// function sparkling() {
//     let text = document.getElementById("pasko");
//     let color = ["red", "green" , "yellow"];
//     let generateColor = Math.floor(Math.random() *3);
//     text.style.color = color[generateColor];
// }

// function sparkling1() {
// 	let text1 = document.getElementById("pasko1");
// 	let color1 = ["red", "green", "yellow"];
// 	let generateColor1 = Math.floor(Math.random() * 3);
// 	text1.style.color = color1[generateColor1];
// }

function RGB_colors () {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function paskoSmiles (){
	let pasko1 = document.getElementById("pasko");

	let rgb1 = RGB_colors();

	pasko1.style.color = rgb1

	let pasko1Color = document.getElementById("pasko1")
	pasko1Color.innerText = rgb1
}


function start() {
    start_color = setInterval(paskoSmiles, 700);
}

function stop() {
    clearInterval(start_color);
}

function paskoTwinkle () {
	let twinkle = document.getElementById("twinkle").value
	twinkle2 = setInterval(paskoSmiles, twinkle)
}

function stop2(){
	clearInterval(twinkle2);
}

