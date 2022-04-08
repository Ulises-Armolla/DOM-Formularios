window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

    $form = document.querySelector('.form');

    $inputs = document.querySelectorAll('.require');
    $errors = document.querySelectorAll('.error')

    let validationsErrors = false;

    for (let i = 0; i < $inputs.length; i++) {
        $inputs[i].addEventListener('blur', ()=>{
            switch ($inputs[i].name) {
                case 'title':
                    if (!$inputs[i].value.trim()) {
                        $errors[i].innerHTML = 'La peli necesita un título.';
                        $errors[i].classList.add('is-invalid');
                        validationsErrors = true;
                    } else {
                        $errors[i].innerHTML = 'Título ingresado correctamente.';
                        $errors[i].classList.remove('is-invalid');
                        $errors[i].classList.add('is-valid');
                        validationsErrors = false;
                    }
                    break;
                case 'rating':
                    if (!$inputs[i].value.trim() || !Number($inputs[i].value.trim()) || $inputs[i].value.trim() < 0 || $inputs[i].value.trim() > 10) {
                        $errors[i].innerHTML = 'Debe indicar un valor entre 0 y 10.';
                        $errors[i].classList.add('is-invalid');
                        validationsErrors = true;
                    } else {
                        $errors[i].innerHTML = 'Calificación ingresada correctamente.';
                        $errors[i].classList.remove('is-invalid');
                        $errors[i].classList.add('is-valid');
                        validationsErrors = false;
                    }
                    break;
                case 'awards':
                    if (!$inputs[i].value.trim() || !Number($inputs[i].value.trim()) || $inputs[i].value.trim() < 0 || $inputs[i].value.trim() > 10) {
                        $errors[i].innerHTML = 'Debe indicar un valor entre 0 y 10.';
                        $errors[i].classList.add('is-invalid');
                        validationsErrors = true;
                    } else {
                        $errors[i].innerHTML = 'Premios ingresados correctamente.';
                        $errors[i].classList.remove('is-invalid');
                        $errors[i].classList.add('is-valid');
                        validationsErrors = false;
                    }
                    break;
                case 'release_date':
                    if (!$inputs[i].value.trim()) {
                        $errors[i].innerHTML = 'Ingrese la fecha de estreno.';
                        $errors[i].classList.add('is-invalid');
                        validationsErrors = true;
                    } else {
                        $errors[i].innerHTML = 'Fecha ingresada.';
                        $errors[i].classList.remove('is-invalid');
                        $errors[i].classList.add('is-valid');
                        validationsErrors = false;
                    }
                    break;
                case 'length':
                    if (!$inputs[i].value.trim() || !Number($inputs[i].value.trim()) || $inputs[i].value.trim() < 60 || $inputs[i].value.trim() > 360) {
                        $errors[i].innerHTML = 'Debe indicar un valor entre 60 y 360.';
                        $errors[i].classList.add('is-invalid');
                        validationsErrors = true;
                    } else {
                        $errors[i].innerHTML = 'Duración ingresada correctamente.';
                        $errors[i].classList.remove('is-invalid');
                        $errors[i].classList.add('is-valid');
                        validationsErrors = false;
                    }
                    break;
                case 'genre_id':
                    if (!$inputs[i].value.trim()) {
                        $errors[i].innerHTML = 'Debe seleccionar un género.';
                        $errors[i].classList.add('is-invalid');
                        validationsErrors = true;
                    } else {
                        $errors[i].innerHTML = 'Género seleccionado.';
                        $errors[i].classList.remove('is-invalid');
                        $errors[i].classList.add('is-valid');
                        validationsErrors = false;
                    }
                    break;
                default:
                    break;
            }
        });    
    }

    $form.addEventListener('submit', function (event) {
        event.preventDefault();

        for (let i = 0; i < $errors.length; i++) {
            if ($inputs[i].value.trim() == '') {
                $errors[i].innerHTML = 'Este dato es obligatorio.';
                $errors[i].classList.add('is-invalid');
                validationsErrors = true;
            }    
        }

        if (!validationsErrors) {
            $form.submit();
        }

    });
}