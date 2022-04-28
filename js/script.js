$(".resumo").click(() => {
    $(".resumo").html(`<div class="resumoTitle">
    <p>Resumo</p>
</div>

<p class="textDescresumo"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis
    auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis
    lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim
    accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci
    id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien
    scelerisque, ac gravida eros vestibulum.
</p>

<p class="textDescresumo2"> 
    Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus
    consequat feugiat.
    Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris
    sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis.
    Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem.
    Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam
    in laoreet odio.</p>

<p class="textDescresum3">
     Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id
    eleifend feugiat. Donec
    eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus
    maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis
    turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis
    consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu
    scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere
    mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta
    arcu. Maecenas eu maximus massa.</p>

<p class="textDescresumo4">
    Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque
    porta pharetra felis ut
    hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus
    dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem.
    Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat
    vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>`);

    $(".resumo").css("height", "500px");
    $(".discussion").css("top", '1170px');
    $("footer").css("top", "1900px");

})

$(".resumo").mouseout(() => {
    $(".resumo").html(`  <div class="resumoTitle">
    <p>Resumo</p>
</div>

<p class="textDescresumo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis
    auctor, mollis felis ut,
    commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros
    sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec
    finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum
    lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida
    eros vestibulum Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus.
    Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum. Etiam aliquam dictum
    nisl, vel aliquet enim accumsan sit ametl accumsant... <a href="">ver mais</a></p>`);

    $(".resumo").css("height", "189px");
    $(".discussion").css("top", '849px');
    $("footer").css("top", "1600px");
})


$(".contentDiscussion button").click(() => {
    $(".contentDiscussion").html(`<p class="textDiscussion">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>

    <p class="assunto">Assunto</p>
     <div class="assuntoInput"><p>Defina um tópico sucinto para notificar os autores...</p></div>

     <p class="conteudo">Conteúdo</p>

     <div class="conteudoInput">
         <div class="enviar">
             <p class="b" >B</p>
             <p class="i" >I<ph2>

             <div class="btnEnviar"><p>Enviar</p></div>

         </div>


     </div>

     <div class="dividerDiscussion"></div>
`);

    $(".textDiscussion").css({
        "font-family": "'Quicksand', sans-serif",
        "color": "#5C5C5C",
        "font-size": "14px",
        "font-weight": "400",
    });

    $(".dividerDiscussion").css("top", "277px");

    $(".btnEnviar").click(() => {
        $(".contentDiscussion").html(`<p class="textDiscussion">Seu tópico foi enviado com sucesso! :D</p>

               

    <p class="textDiscussion2">Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>

        <u class="DescubraJobs">Descubra outros trabalhos!</u>

        <div class="dividerDiscussion"></div>

        <button class="newTopic" >
            <span>Criar Novo Tópico</span>
        </button>
    </div>

    <div class="question3border">

        <img src="/assets/setinhas Duplas.svg" alt="Check Double" width="30px">
        <p>Aguardando feedback dos autores</p>
        <u class="editTopic" >Editar tópico</u>
    </div>
    <div class="questions3">

        <h4>Assunto da pergunta aparece aqui</h4>
        <p class="carlosQuestion3">Carlos Henrique Santos</p>
        <p class="perguntaCarlos3">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da
            análise da dimensão e impacto de processo formativo situado impacto de processo formativo
            processo...
        </p>

    </div>`);

        $('.textDiscussion2').css({
            "margin-top": "18px",
            "margin-left": "113.34px",
            "margin-right": "139.41px"
        });

        $(".contentDiscussion button").css({
            "left": "411.08px",
            "width": "235.15px"
        });

        $(".contentDiscussion button span").css("right", "25px");
        $("footer").css("top", "1800px");
        $(".discussion").css('height', "850px");
        $(".question2").css("top", "78%");
        $(".questions").css("top", "58.5%");


        $(".newTopic").click(() => {

            $(".contentDiscussion").html(`<p class="textDiscussion">Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!</p>

    <p class="assunto">Assunto</p>
     <div class="assuntoInput"><p>Defina um tópico sucinto para notificar os autores...</p></div>

     <p class="conteudo">Conteúdo</p>

     <div class="conteudoInput">
         <div class="enviar">
             <p class="b" >B</p>
             <p class="i" >I<ph2>

             <div class="btnEnviar"><p>Enviar</p></div>

         </div>


     </div>

     <div class="dividerDiscussion"></div>
`);

            $(".textDiscussion").css({
                "font-family": "'Quicksand', sans-serif",
                "color": "#5C5C5C",
                "font-size": "14px",
                "font-weight": "400",
            });

            $(".dividerDiscussion").css("top", "277px");


            $(".discussion").css("height","700px")
            $(".questions").css("top", "48%")
            $(".question2").css("top", "73%")

            $("footer").css("top", "1600px");


        })


    });


});

$(".question2").click(() => {
    $(".question2").html(`<h4>Assunto da pergunta aparece aqui</h4>
    <p class="carlosQuestion2">Carlos Henrique Santos</p>
    <p class="perguntaCarlos2">Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da
        análise da dimensão e impacto de processo formativo situado impacto de processo formativo
        processo...
    </p>

    <p class="likeAnswer2">4 like <span>4 resposta</span></p>

    <div class="like2"></div>

    <div class="menuIcon2"> <img src="/assets/Menu Icon.png" alt="menu Icon"> </div>

    <div class="divisoriaQuestion2"></div>

    <span class="TextAutor">Autor</span>
    <img class="imgAdriano" src="/assets/setinhas Duplas.svg" width="20px">
    <p class="AdrianoNome">Adriano da Silva</p>

    <p class="answerAdriano">Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e
        impacto de processo formativo situado impacto de processo formativo processo resente relato
        inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de
        processo formativo processo.</p>

    <div class="divisoria2Question2"></div>

    <p class="CarlosName">Carlos Henrique Santos</p>
    <p class="answerCarlos">Consegui entender melhor agora! Parece que a variação da análise da dimensão e
        impacto de processo formativo situado impacto de processo formativo.</p>
    <p class="answerCarlos2"> Obrigada pela resposta, muito interessante o seu trabalho! </p>


    <div class="divisoria3Question2"></div>
    <span class="TextCoAutor">Coautor</span>
    <img class="imgCamila" src="/assets/setinhas Duplas.svg" width="20px">
    <p class="CamilaNome">Camila Ferreira Andrade</p>

    <p class="answerCamila">Também ínteressante lembrar que o relato inscreve-se no campo da análise da
        dimensão e impacto de processo formativo situado impacto de processo formativo processo resente
        relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto
        de processo formativo processo. </p>
    <p class="answerCamila2"> Situado impacto de processo formativo processo resente relato inscreve-se no
        campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo
        processo. </p>


    <div class="divisoria4Question2"></div>
    <span class="TextCoAutor2">Coautor</span>
    <img class="imgAna" src="/assets/setinhas Duplas.svg" width="20px">
    <p class="AnaName">Ana Carolina</p>
    <p class="answerAna">Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e
        impacto de processo formativo situado impacto de processo formativo processo resente relato
        inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de
        processo formativo processo.</p>`);

    $(".discussion ").css("height", "1300px");
    $("footer").css("top", "2220px");
    $(".questions").css("top", "25%");
    $(".question2").css({
        "top": "38.5%",
        "height": "750px"
    });

    $(".like2").css("bottom", "620px");
});
