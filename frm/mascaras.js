const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	numero: /^[a-zA-Z0-9\_\-]{1,2}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^.[a-zA-ZÀ-ÿ\s]{4,12}$/, // 4 a 12 digitos.
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	cedula:/^[0-9\-]{11,12}$/,
	correo:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
}
									
const campos = {
	numero: false,
	nombre: false,
	apellido: false,
	telefono: false,
	cedula: false,
	correo: false
}
					
const validarFormulario = (e = blur()) => {
	switch (e.target.name) {
		case "numero":
			validarCampo(expresiones.numero, e.target, "numero");
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, "nombre");
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, "apellido");
		
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, "telefono");
		break;
		case "cedula":
			validarCampo(expresiones.cedula, e.target, "cedula");
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, "correo");
		break;
	}
}



const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		// document.querySelector(`#grupo__${campo}`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo}`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo}`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo}`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo}`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo}`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}  
       
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellido && campos.telefono && campos.cedula && campos.correo && terminos.checked){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 3000);
	
	}
});