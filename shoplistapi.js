$(document).ready(function(){
    var s=JSON.parse(localStorage.getItem("a"));
    var allItems=[],allsaved=[];
    input_temp=infodeal_1(s);
    item_temp=infodeal_2(input_temp);
    $.ajax("goods.json").done(function(sa){
        allItems=sa;
        item=getgoodinfo(item_temp,allItems);
        $.ajax("forsave.json").done(function(haha){
            allsaved=haha;
            gift=getsaved(item,allsaved);
            Receipt=calprice(gift,item);
            var compiled = _.template($("#list").text());
            var test=compiled({"Receipt":Receipt});
            $(".row").after(test);
        });
     });
// var Receipt=printInventory(s);
    //var result=s.length;
//    var compiled = _.template($("#list").text());
//    var test=compiled({"Receipt":Receipt});
//    $(".row").after(test);

//    var t=[];
//    $.ajax("test.json").done(function(sa){
//   //  t=JSON.parse($(this).responseText);
//    alert(sa[0].barcode);
//  //alert(9);
//    });debugger
 //   alert(3);
})
