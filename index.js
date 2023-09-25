function end() {
	let finish = document.getElementById("finish");
	load.setAttribute("hidden", "hidden");
	finish.removeAttribute("hidden");
}

function next() {
	let warning = document.getElementById("final_warning_window");
	let start = document.getElementById("start");
	warning.removeAttribute("hidden");
	start.setAttribute("hidden", "hidden");
}

function finish() {
	let home = document.getElementById("home");
	let load = document.getElementById("load");
	load.removeAttribute("hidden");
	home.setAttribute("hidden", "hidden");
	setTimeout(() => end(), 15000)
}
