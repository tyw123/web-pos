$(document).ready(function(){
    var item=[];
    $("button").on("click",function(){
    if($(this).data("barcode")!=undefined){
        var temp="";
         temp+=$(this).data("barcode");
        var num=$(this).closest(".col-md-2").find(".quantity").val()
        temp+="-"+num;
        item.push(temp);
        var itemp=JSON.stringify(item)
        localStorage.setItem("a",itemp);
       // alert(localStorage.a);
        }
    });
    })