$(document).ready(()=>{
    if(!window.location.hash)
    {
        window.location.hash = 'atividades';
    }else
    {
        $('iframe').hide();
        $('.load').show();
        setTimeout(()=>{
            $('.load').hide();
            $('iframe').show();
        }, 500);
        $('iframe').attr('src', `./${window.location.hash.substring(1)}.html`);
    }
    $(window).on('hashchange', ()=>{
        $('iframe').hide();
        $('.load').show();
        setTimeout(()=>{
            $('.load').hide();
            $('iframe').show();
        }, 500);
        $('iframe').attr('src', `./${window.location.hash.substring(1)}.html`);
    });
});