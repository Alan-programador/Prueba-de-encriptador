function encriptar(){
	let abecedario ="abcdefghijklmnopqrstuvwxyz";
	let original = document.getElementById("mensaje").value;
	let final = "";
	let contador = 7;
	for(let i = 0; i<original.length; i++){
		let caracter = original[i].toLowerCase();
		if(caracter == ' '){
			final += ' ';
			contador = 7;
			continue;
		}
		let o = 0;
		while(o<26 && caracter != abecedario[o]){
			o++;
		}
		if(o==26){
			final += caracter;
		}else{
			final += abecedario[(o+contador)%26];
		}
		contador++;
	}
		document.getElementById("respuesta").innerText ="Tu texto encriptado es: " + final;
}
function desencriptar(){
	let abecedario ="abcdefghijklmnopqrstuvwxyz";
	let original = document.getElementById("mensaje").value;
	let final = "";
	let contador = 7;
	for(let i = 0; i<original.length; i++){
		let caracter = original[i].toLowerCase();
		if(caracter == ' '){
			final += ' ';
			contador = 7;
			continue;
		}
		let o = 0;
		while(o<26 && caracter != abecedario[o]){
			o++;
		}
		if(o==26){
			final += caracter;
		}else{
			let letra = o-contador;
			if(letra<0){
				letra = 26 + letra;
			}
			final += abecedario[letra];
		}
		contador++;
	}
		document.getElementById("respuesta").innerText ="Tu texto encriptado es: " + final;
}