$(document).ready(()=>{
    let base_type;
    
    $('.areaTypeBase').hide();
    $('.imgPiramide').hide();
    $('#pLado2').hide();
    $('#pLado2-text').hide();
    $('#pBase').hide();
    $('#pBase-text').hide();
    $('#pBaseAltura').hide();
    $('#pBaseAltura-text').hide();

    $('#base-triangulo').click(()=>{
        $('button').removeClass('btnSelect');
        $('#base-triangulo').addClass('btnSelect');

        $('.areaSelecione').hide(200);
        $('.areaTypeBase').show(200);

        $('.imgPiramide').hide(200);
        $('#img-triangulo').show(200);

        $('.pFormula').hide();
        $('#pFormula-triangular').show();

        base_type = 'triangular';
    });
    $('#base-quadrado').click(()=>{
        $('button').removeClass('btnSelect');
        $('#base-quadrado').addClass('btnSelect');

        $('.areaSelecione').hide(200);
        $('.areaTypeBase').show(200);

        $('.imgPiramide').hide(200);
        $('#img-quadrado').show(200);

        $('.pFormula').hide();
        $('#pFormula-quadrangular').show();

        base_type = 'quadrangular';
    });
    $('#base-pentagono').click(()=>{
        $('button').removeClass('btnSelect');
        $('#base-pentagono').addClass('btnSelect');

        $('.areaSelecione').hide(200);
        $('.areaTypeBase').show(200);

        $('.imgPiramide').hide(200);
        $('#img-pentagono').show(200);

        $('.pFormula').hide();

        base_type = 'pentagonal'
    });
    $('#base-hexagono').click(()=>{
        $('button').removeClass('btnSelect');
        $('#base-hexagono').addClass('btnSelect');

        $('.areaSelecione').hide(200);
        $('.areaTypeBase').show(200);

        $('.imgPiramide').hide(200);
        $('#img-hexagono').show(200);

        $('.pFormula').hide();

        base_type = 'hexagonal';
    }); 

    $('#pFormula-triangular').change(()=>{
        if($('#pFormula-triangular').val() == 'p1')
        {
            $('#pBase').hide();
            $('#pBase-text').hide();
            $('#pBaseAltura').hide();
            $('#pBaseAltura-text').hide();
            $('#pBase').val(NaN);
            $('#pBaseAltura').val(NaN);
            
            $('#pLado').val(NaN);
            $('#pLado').show();
            $('#pLado-text').show();
        }
        else
        {
            $('#pBase').show();
            $('#pBase-text').show();
            $('#pBaseAltura').show();
            $('#pBaseAltura-text').show();
            
            $('#pLado').hide();
            $('#pLado-text').hide();
        }
    });
    $('#pFormula-quadrangular').change(()=>{
        if($('#pFormula-quadrangular').val() == 'p1')
        {
            $('#pLado2').hide();
            $('#pLado2-text').hide();
            $('#pLado2').val(NaN);
        }
        else
        {
            $('#pLado2').show();
            $('#pLado2-text').show();
        }
    });

    $('#pCalcular').click(()=>{
        switch(base_type){
            case 'triangular':
                $('#result').text(`O Volume da pirâmide com base ${base_type} usando os valores que você forneceu é aproximadamente ${triangulo().toFixed(2)} cm³`);
            break;
            case 'quadrangular':
                let quadrangular_type;
                if($('#pFormula-quadrangular').val() == 'p1')
                {
                    quadrangular_type = 'quadrada';
                }
                else
                {
                    quadrangular_type = 'retangular';
                }
                $('#result').text(`O Volume da pirâmide com base ${quadrangular_type} usando os valores que você forneceu é aproximadamente ${quadrado().toFixed(2)} cm³`);
           break;
            case 'pentagonal':
                $('#result').text(`O Volume da pirâmide com base ${base_type} usando os valores que você forneceu é aproximadamente ${pentagono().toFixed(2)} cm³`);
            break;
            case 'hexagonal':
                $('#result').text(`O Volume da pirâmide com base ${base_type} usando os valores que você forneceu é aproximadamente ${hexagono().toFixed(2)} cm³`);
            break;
        }
    });

    function triangulo()
    {
        let L = parseFloat($('#pLado').val());
        let h = parseFloat($('#pAltura').val());
        let bT = parseFloat($('#pBase').val());
        let hT = parseFloat($('#pBaseAltura').val());
        let A;

        if($('#pFormula-triangular').val() == 'p1')
        {
            A = (Math.sqrt(3) / 4) * Math.pow(L, 2);
        }
        else
        {
            A = (1 / 2) * bT * hT;
        }

        let V = (1 / 3) * A * h;

        return V;
    }

    function quadrado()
    {
        let L = parseFloat($('#pLado').val());
        let L2 = parseFloat($('#pLado2').val());
        let h = parseFloat($('#pAltura').val());
        let A;
        let V;

        if($('#pFormula-quadrangular').val() == 'p1')
        {
            A = Math.pow(L, 2);
        }
        else
        {
            A = L * L2;
        }

        V = (1 / 3) * A * h;

        return V;
    }

    function pentagono()
    {
        let L = parseFloat($('#pLado').val());
        let h = parseFloat($('#pAltura').val());

        let A = (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(L, 2);
        let V = (1 / 3) * A * h;

        return V;
    }

    function hexagono()
    {
        let L = parseFloat($('#pLado').val());
        let h = parseFloat($('#pAltura').val());

        let A = (3 * Math.sqrt(3) / 2) * Math.pow(L, 2);
        let V = (1 / 3) * A * h;

        return V;
    }
});