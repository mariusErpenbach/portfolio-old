
function decipher (Input,key) {
alphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM").split("");
var newWORD = " ";
//var Input =  ;

for (i=0;Input.length>i;i++){ // For loop mit jeden buchstaben durchlaufen zu lassen

	if(alphabet.includes(Input.charAt(i).toUpperCase())) {
	
		var character = Input.charAt(i).toUpperCase(); //bei jedem durchlauf wird die var "character" zum aktuellen buchstaben  // und er wird zum großbuchstaben
		var newCharacterValue = alphabet.indexOf(character)+key; // der aktuelle buchstabe bekommt einen Wert durch seinen platz im Alphabet und dieser wird direkt um den Inhalt von key erhöt und in eine neue variable geschrieben 
		newWORD += alphabet[newCharacterValue]; // in die variable newWORD wird der Buchstabe hinzu addiert, der durch den neuen Wert des Buchstaben im Alphabet ermittelt wurde
	} else { 
		newWORD += Input.charAt(i)}
	}
	
	var loesung = document.getElementById('Loesung')
	loesung.innerText = newWORD

	console.log(newWORD); // gibt das neue wort aus am ende der function

}