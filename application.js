$(document).ready(function(){
    var item="";
    $("button").on("click",function(){
    if($(this).data("barcode")!=undefined){
        item+=$(this).data("barcode");
        }
    });
    })