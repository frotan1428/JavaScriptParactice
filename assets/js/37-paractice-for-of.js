import {countries} from '../data/countries.js'



let options=" ";
for (const country of countries) {

  options += `<option value=${country.cca2} >${country.name.common}</option>`
 
}
document.querySelector("#country").innerHTML=options;




