function convert (){
	var x = document.getElementById("Input").value;

	var Output = "";
	Output += "M".repeat(Math.floor(x/1000));
	x -= Math.floor(x/1000)*1000 ;

	Output += "CM".repeat(Math.floor(x/900));
	x -=  Math.floor(x/900)*900;

	Output += "D".repeat(Math.floor(x/500));
	x-= Math.floor(x/500)*500;

	Output += "CD".repeat(Math.floor(x/400));
	x -= Math.floor (x/400)*400;

	Output += "C".repeat(Math.floor(x/100));
	x -= Math.floor(x/100)*100;

	Output += "XC".repeat(Math.floor(x/90));
	x -= Math.floor (x/90)*90;

	Output += "L".repeat(Math.floor(x/50));
	x -=Math.floor (x/50)*50;

	Output += "XL".repeat(Math.floor(x/40));
	x-= Math.floor (x/40)*40;

	Output += "X".repeat(Math.floor(x/10));
	x -= Math.floor(x/10)*10;

	Output += "IX".repeat(Math.floor(x/9));
	x -= Math.floor(x/9)*9;

	Output += "V".repeat(Math.floor(x/5));
	x -= Math.floor (x/5)*5;

	Output += "IV".repeat (Math.floor(x/4));
	x -= Math.floor (x/4)*4;

	Output += "I".repeat(x);
		//if (Output.substring(Output.length -4)=="IIII"){Output = Output.replace("IIII","IV")}

	alert( Output)



}
