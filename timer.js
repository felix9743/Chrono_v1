var actif = false;

var t_milli   = 0;
var t_seconde = 0;
var t_minute  = 0;
var t_heure   = 0;

var timer = document.getElementById("timer");

function start_stop() {
	var bt_start = document.getElementById("bt_start");
	var bt_stop  = document.getElementById("bt_stop");
	var g_start  = document.getElementById("g_start");

	// Si les boutons de démarrage sont masqué,
	if (g_start.style.display == "none") {

		bt_stop.style.display = "none"; // Masque le bouton d'arrêt.
		g_start.style.display = "block"; // Affiche les boutons.

		time("stop"); // Arrête le timeur
	} else {
		bt_stop.style.display = "inline-block"; //
		g_start.style.display = "none"; //

		time("start"); // Démarre le timeur.
	}
}

function time(info, reset = false) {
	if (info == "stop") {
		actif = false;
	}

	if (info == "start") {
		actif = true;
		addtime();
	}

	if (reset) {
		timer.innerText = "00:00:00:00";
		document.title  = "00:00:00:00";

		t_milli   = 0;
		t_seconde = 0;
		t_minute  = 0;
		t_heure   = 0;
	}
}

function addtime() {
	if (actif == true) {
		t_milli++;

		if (t_milli == 100) { t_seconde++; t_milli = 0; }
		if (t_seconde == 60) { t_minute++; t_seconde = 0; }
		if (t_minute == 60) { t_heure++; t_minute = 0; }


		if (t_milli < 10) { r_milli = "0" + t_milli; } else { r_milli = t_milli; }
		if (t_seconde < 10) { r_seconde = "0" + t_seconde; } else { r_seconde = t_seconde; }
		if (t_minute < 10) { r_minute = "0" + t_minute; } else { r_minute = t_minute; }
		if (t_heure < 10) { r_heure = "0" + t_heure; } else { r_heure = t_heure; }

		timer.innerText = r_heure.toString() + ":" + r_minute.toString() + ":" + r_seconde.toString() + ":" + r_milli.toString();
		document.title  = r_heure.toString() + ":" + r_minute.toString() + ":" + r_seconde.toString() + ":" + r_milli.toString();

		setTimeout(addtime, 10);
	} else {
		console.log("stop")
	}
}