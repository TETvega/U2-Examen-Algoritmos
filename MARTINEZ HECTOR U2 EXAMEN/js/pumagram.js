
// que se cree el arreglo informacion
// localStorage.clear()
const informacion = JSON.parse(localStorage.getItem("informacion")) || localStorage.setItem("informacion", JSON.stringify(

    {
        likes: 0 ,
        comentarios: [
            {user:"usuario456" ,coment: "¡Gran foto!"},
            {user: 'usuario789', coment: "Hermoso lugar 😍"},
        ] 
    }

 ))

const btnLike = document.getElementById('btn-megusta')
const imglikes = document.getElementById('img')
const btnPublicar= document.getElementById('btn-publicarComentario')
const btnUsernameLimpiarLocal = document.querySelector(".user-info")

  cargarEventListeners()
  function cargarEventListeners() {

    leerMegusta()
    leerComentarios()

    btnLike.addEventListener('click' , agregarLikesOQuitarLikes)
    imglikes.addEventListener('dblclick' ,agregarLikesOQuitarLikesIMG)
    btnPublicar.addEventListener('click' , agregarComentario)

  }

// Funcion para crear comentarios 
function agregarComentario(e) {
    e.preventDefault()
    
    const comentario = document.querySelector('.comment-input').value
    if ( comentario.trim() === '') {
        return
    }

    const informacion = JSON.parse(localStorage.getItem("informacion"));
    // console.log(informacion);
    const comentarios= informacion.comentarios

    const newComentario={
        user: 'Invitado',
        coment: comentario
    }
    comentarios.push(newComentario)

    informacion.comentarios = comentarios
    localStorage.setItem("informacion", JSON.stringify(informacion));
    document.querySelector('.comment-input').value =''
    leerComentarios()
}

  // agregando likes o dislikes desde la imagen --------------
function agregarLikesOQuitarLikesIMG(e) {
    e.preventDefault()
    if (e.target.classList.contains("post-image") && btnLike.textContent==='Me gusta' ) {
        btnLike.textContent = 'No me gusta'

        darLike()
        return
    }
    if (e.target.classList.contains("post-image") && btnLike.textContent==='No me gusta' ) {
        btnLike.textContent = 'Me gusta'
        
        
        darDislike()
        return
    }
}

//  agregando likes o dislike desde los botones ----------------- /
  function agregarLikesOQuitarLikes(e) {
    e.preventDefault()
    
    // console.log(btnLike.textContent);
    
    if (e.target.classList.contains("like-btn") && btnLike.textContent==='Me gusta' ) {
        btnLike.textContent = 'No me gusta'

        darLike()
        return
    }
    if (e.target.classList.contains("like-btn") && btnLike.textContent==='No me gusta' ) {
        btnLike.textContent = 'Me gusta'
        
        
        darDislike()
        return
    }
    
  }

  
// --- Funcion para dar dislikes ------------- 
  function darDislike() {
    const informacion = JSON.parse(localStorage.getItem("informacion"));
        // console.log(informacion);
        const likes= (informacion.likes)-1
        
        // console.log(likes);
        const contador = document.getElementById('contador-Likes')
        contador.innerHTML=likes

        informacion.likes = likes
        localStorage.setItem("informacion", JSON.stringify(informacion));


        // console.log('Dando Dislike');
  }



//    funcion para dar likes ------------
  function darLike() {
    
    const informacion = JSON.parse(localStorage.getItem("informacion"));
        // console.log(informacion);
        const likes= (informacion.likes)+1
        
        // console.log(likes);
        const contador = document.getElementById('contador-Likes')
        contador.innerHTML=likes

        informacion.likes = likes
        localStorage.setItem("informacion", JSON.stringify(informacion));


        // console.log('Dando Like');
  }

  // Funcion para leer los Me gusta
  function leerMegusta() {
    
    const informacion = JSON.parse(localStorage.getItem("informacion"));
    // console.log(informacion);
    const likes= informacion.likes
    // console.log(likes);
    const contador = document.getElementById('contador-Likes')
    contador.innerHTML=likes

  }

  function leerComentarios() {
    const informacion = JSON.parse(localStorage.getItem("informacion"));
    // console.log(informacion);
    const comentarios= informacion.comentarios
    // console.log(comentarios);
    const cajaComentarios = document.querySelector('.comments-container')
    let content = ``;
    comentarios.forEach(objeto => {
        content += `
        <div class="comment">
            <span class="comment-username">${objeto.user}</span>
            <span class="comment-text">${objeto.coment}</span>
        </div>
        `
    })
    
    cajaComentarios.innerHTML=content
    console.log(cajaComentarios);
  }

 
        
