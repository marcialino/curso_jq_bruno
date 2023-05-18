$('#btn').click(
    function(){
        $('#caixa').toggle()
        if($('#caixa').is(":visible")){
            
            $('#btn').text('Ocultar')
        }else{
            $('#btn').text('Mostrar')
        }
    }
)
   