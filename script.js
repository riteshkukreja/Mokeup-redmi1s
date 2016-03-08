window.onload = function() {
	var mobile = document.getElementsByClassName('mobile')[0];
	document.getElementById('zoom').addEventListener('click', function(e) {
		mobile.className = "mobile zoom";
		this.className = ' active';
		document.getElementById('rotate').className = "";
	});

	document.getElementById('rotate').addEventListener('click', function(e) {
		mobile.className = "mobile rotate";
		this.className = ' active';
		document.getElementById('zoom').className = "";
	});
}