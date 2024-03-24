var result = document.getElementById("result").onclick = function() {
	var cont1 = Number(document.getElementById("cont1").value);
	var cont2 = Number(document.getElementById("cont2").value);

	alert(cont1+cont2);
	if (cont1 > cont2) {
		alert("Первое число больше второго");
	} else if (cont1 < cont2) {
		alert("Первое число меньше второго");
	} else {
		alert("Числа равны")
	};
}