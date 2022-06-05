const form = document.querySelector("#frm_information");
let timeout = null;

var errorBox = new Object();

document.querySelectorAll('.campo-entrada').forEach((box)=>{
    const inputBox = box.querySelector('input');
    inputBox.addEventListener('keydown', (Event) =>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            console.log(`input ${inputBox.name} value: `,inputBox.value);
            //[inputBox.name] = true;
            validarDatos(box, inputBox);
        }, 300);
    });
});

validarDatos = (box, inputBox) =>{
    if(inputBox.value == ''){
            mostrarError(true, box, inputBox);
    }else{
            mostrarError(false, box, inputBox);
    }
}

mostrarError = (verificarError, box, inputBox) => {
    if(verificarError){
        box.classList.remove('input-success');
        box.classList.add('input-error');
        errorBox[inputBox.name] = true;
    }else{
        box.classList.remove('input-error');
        box.classList.add('input-success');
        errorBox[inputBox.name] = false;
    }
}

function hasValue(input){
    if (input.value.trim() === "") {
		return "";
	}
	return input;
}

function enviar(){
    let nameValid = hasValue(form.elements["names"]);
    let lastNameValid = hasValue(form.elements["lastnames"]);

    if(nameValid && lastNameValid){
        
        Swal.fire({
            icon: 'success',
            title: 'HOLA!!',
            text: nameValid.value+' '+lastNameValid.value,
            timer: 2500
        })
        console.log(errorBox)

        //form.submit();          
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campos vacíos!',
        })
    }
}


window.onload = function(){
    document.getElementById("enviar-datos").onclick = enviar ;
}