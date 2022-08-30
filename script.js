//Máscara Telefone

const input = document.querySelector('.telefone')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length
    
    if (inputLength == 0) {
        input.value = '('
    } else if (inputLength == 3) {
        input.value += ')'
        input.value += ' '
    } else if (inputLength == 10) {
        input.value += ' '
        input.value += '-'
        input.value += ' '
    }
})

//Animação de ancoragem

var $doc = $('html, body');
$('#link__formulario' || '#link__beneficios' || '#link__funcionamento').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -64
    }, 500);
    return false;
});

var $doc = $('html, body');
$('#link__beneficios').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -72
    }, 500);
    return false;
});

var $doc = $('html, body');
$('#link__funcionamento').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -72
    }, 500);
    return false;
});

var $doc = $('html, body');
$('#link__formulario__hero').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -64
    }, 500);
    return false;
});

var $doc = $('html, body');
$('#link__hero').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -64
    }, 500);
    return false;
});



//Loading formulário

var formulario = $(".formulário__container-campos")

formulario.submit(function(event){
    $('body').toggleClass('loading');
});