var gender = prompt('Por favor ingrese su sexo: Masculino o Femenino');
var res = gender.toLowerCase();
var age = prompt('Por favor ingrese su edad');

if (res === 'masculino' && age < 18){
    alert('Sr., usted es menor de edad, no puede ingresar.');
} else if (res === 'masculino' && age >= 18){
    alert('Sr. usted es mayor de edad, puede ingresar')
} else if (res === 'femenino' && age < 18){
    alert('Sra. usted es menor de edad, no puede ingresar')
} else if (res === 'femenino' && age >= 18) {
    alert('Sra. usted es mayor de edad, puede ingresar.')
}
else {
    alert('Error.')
}