function getRGB()  {

console.log("RGB TEXT:");
var Rt = document.getElementById("rInputText").value; 
console.log(Rt);
var Gt = document.getElementById("gInputText").value; // récupère les valeur de l'input au Id Correspondant
console.log(Gt);
var Bt = document.getElementById("bInputText").value; 
console.log(Bt);

var RGBt = `rgb(${Rt}, ${Gt}, ${Bt})`; // concatène les valeurs au format rgb en string (valeur numérique --> string)
console.log(RGBt);

console.log("RGB BACK:");
var Rback = document.getElementById("rInputBack").value;   
console.log(Rback); 
var Gback = document.getElementById("gInputBack").value;
console.log(Gback);
var Bback = document.getElementById("bInputBack").value; 
console.log(Bback);

var RGBback = `rgb(${Rback}, ${Gback}, ${Bback})`;
console.log(RGBback);

ApplyColor(RGBt,RGBback); //appel la fonction apply color

}

function getHEX()  {

    var aHext = document.getElementById("aHexInputText").value;    
    var bHext = document.getElementById("bHexInputText").value; // récupère les valeur de l'input au Id Correspondant
    var cHext = document.getElementById("cHexInputText").value; 
    
    var HEXt = `#${aHext}${bHext}${cHext}`;
    
    var aHexback = document.getElementById("aHexInputBack").value;    
    var bHexback = document.getElementById("bHexInputBack").value;
    var cHexback = document.getElementById("cHexInputBack").value; 
    
    var HEXback = `#${aHexback}${bHexback}${cHexback}`; // concatène au format HEX
    
    ApplyColor(HEXt,HEXback);
    
}

function getHSL()  {

    var Ht = document.getElementById("hInputText").value;    
    var St = document.getElementById("sInputText").value; // récupère les valeur de l'input au Id Correspondant
    var Lt = document.getElementById("lInputText").value; 
    
    var HSLt = `hsl(${Ht}, ${St}%, ${St}%)`; // concatène les valeurs au format rgb en string (valeur numérique --> string)
    
    var Hback = document.getElementById("hInputBack").value;    
    var Sback = document.getElementById("sInputBack").value;
    var Lback = document.getElementById("lInputBack").value; 
    
    var HSLback = `hsl(${Hback}, ${Sback}%, ${Lback}%)`;
    
    ApplyColor(HSLt,HSLback); //appel la fonction apply color
    
    }


function ApplyColor(ColorText,ColorBack){
    var ColorPre = document.getElementById("color-preview");// identification de la balise avec l'id à appliquer la couleur

    ColorPre.style.color = ColorText; // change le style de la balise 
    ColorPre.style.backgroundColor = ColorBack;// change le style de la balise
}