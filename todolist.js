
2. //GUARDAR LOS GET ELEMENT EN UNA VARIABLE
const getText= document.getElementById("texto")
const getButton = document.getElementById("envio")


3. // PONER UN ESCUCHADOR AL BOTON EN CUYA FUNCION ESCUCHE LO QUE VIENE DEL INPUT
getButton.addEventListener("click", function (event) {
    const tarea = document.getElementById("texto").value//VALOR DEL INPUT
    console.log(tarea)

    //SI LA TAREA ESTA VACIA
    if (tarea.trim() !== '') {

        // 4. CREAR LAS TAREAS QUE VIENEN DEL INPUT EN LI
        const tareaPintada = document.createElement('li')//tareaPintada creará un LI
        
        // Crear el checkBox
        const check = document.createElement('span') 
        
        // Emoji X
        const eliminar = document.createElement('span');
        eliminar.textContent = '❌'; 
        eliminar.style.color = 'red';
        eliminar.style.cursor = 'pointer';

        // Emoji editar
        const editar = document.createElement('span');
        editar.textContent = '✏️';
        editar.style.cursor = 'pointer';

        // DAR ESTILOS AL LI Y CHEKBOX
        check.classList.add('checkbox')
        tareaPintada.textContent = tarea;//cuyo sera el de tarea, dado por el input 
        tareaPintada.classList.add('list'); // Aplicar estilo de Bootstrap
        
        // 5.  PINTAR LOS LI CON CHECKBOX,ELIMINAR Y EDITAR EN UL CON APPENDCHILD
        const ul = document.getElementById("ul");
        ul.appendChild(tareaPintada)
        tareaPintada.prepend(check)
        tareaPintada.appendChild(eliminar)
        tareaPintada.appendChild(editar)

      

        //6. DAR FUNCIONABILIDAD CHECKBOX PONIENDO EVENTO CLICK CON ADDEVENTLISTENER
        check.addEventListener("click", function (event) {
        //cambiar el estilo al checkbox y al texto de la tarea
        check.classList.toggle('checkClick')
        tareaPintada.classList.toggle('tareaTachada')
    })

        //7. DAR FUNCIONABILIDAD A LA X PONIENDO EVENTO CLICK CON ADDEVENTLISTENER
        eliminar.addEventListener("click", function (event) {
        const ul = document.getElementById('ul'); // Asegurar que este ID es correcto

        //eliminar tarea
        ul.removeChild(tareaPintada)
    })

    console.log(tareaPintada.textContent)
        //8. FUNCION EDITAR PONIENDO EVENTO CLICK CON ADDEVENTLISTENER
        editar.addEventListener("click", function (event) {

        // // Crear la tarea de remplazo
        // const tareaNew = document.createElement("span")
        // //Dar atributos
        // tareaNew.setAttribute("id", "newSpan")
        // //Crear contenido
        // const NewContent = document.createTextNode ("Tarea obsoleta")
        // // Aplicar contenido al elemento
        // tareaNew.appendChild(NewContent)
        // // Reemplazo
        // const tareaOld = event.target.closest("li") // obtiene el elemento específico de click. El closest recorre el elemento  padre y llega a la raiz 
        // const padre = tareaOld.parentNode // del padre llega a los hijos ul>li

        // padre.replaceChild(tareaNew, tareaOld)


        // Suponiendo que tareaPintada es tu <li> generado
        let tareaPintada = document.querySelector('.list');

        // Acceder al texto de los hijos de tareaPintada
        let textoTarea = tareaPintada.childNodes[1];
        //Pedir el texto por prompt
        let pedirTexto = prompt("Tarea editada:", textoTarea.textContent)
        //Crear el texto peido y guardarlo en una variable
        let nuevoTexto = document.createTextNode(pedirTexto.trim()); //Elimina espacios en blanco para obtener el contenido necesario.
        
        // Reemplazar texto old por el nuevo del prompt
        tareaPintada.replaceChild(nuevoTexto, textoTarea)




      
    })

    }
})












    // // Crear un nuevo elemento 

    // var nuevoParrafo = document.createElement("p");

    // // Agregar el contenido al nuevo elemento
    // nuevoParrafo.textContent = "Este es un nuevo párrafo.";

    // // Obtener el elemento padre al que se va a agregar el nuevo elemento
    // var contenedor = document.getElementById("contenedor");

    // // Agregar el nuevo elemento al DOM
    // contenedor.appendChild(nuevoParrafo);



