function abtme(open) {
	var abdiv = document.getElementById("about"),
	maindiv = document.getElementById("maindiv");
	if (open) {
		abdiv.style.display = 'block';
		maindiv.style.display = 'none';
	} else {
		abdiv.style.display = 'none';
		maindiv.style.display = 'block';
	}
}
function htp(open) {
	var abdiv = document.getElementById("htp"),
	maindiv = document.getElementById("maindiv");
	if (open) {
		abdiv.style.display = 'block';
		maindiv.style.display = 'none';
	} else {
		abdiv.style.display = 'none';
		maindiv.style.display = 'block';
	}
}
function playMusic() {
	const musicFile = 'music/background.mp3';
	const audio = new Audio(musicFile);
	audio.volume = 0.35;
	audio.loop = true;
	audio.play();
}
document.addEventListener('click', playMusic, {once: true});