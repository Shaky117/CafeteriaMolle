function inicializar(){
    $("#btnEnviar").click(doClickEnviar);

}

function doClickEnviar(e){
    if($("#txtPassword").val()== 
    $("#txtConfirmPassword").val()){
        $("#formCrearUsuario").submit();
    }else{
        //
    }
}

$(function  (){
    inicializar();
});