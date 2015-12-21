$(document).ready(function(){
    var s=JSON.parse(localStorage.getItem("a"));
    var Receipt=printInventory(s);
    var result=s.length;
   // var compiled = _.template('<% _.forEach(users, function(user) { %><th><%- user %></th><% }); %>');
//    for(var i=0;i<s.length;i++){
//        var test=compiled({ 'users': [Receipt.item[i].name,
//                                      Receipt.item[i].price,
//                                      Receipt.item[i].num,
//                                      Receipt.gift[i].num,
//                                      Receipt.item[i].total]});
//        var total=$("<tr>"+test+"</tr>");
//        $(".table1 tbody").prepend(total);
//    }
//    var t2=compiled({ 'users': [(Number(Receipt.total)+Number(Receipt.saved)).toFixed(2),Receipt.saved,Receipt.total]});
//    var to2=$("<tr>"+t2+"</tr>");
//    $(".table2 tr:last").prepend(t2);

  // var test=$("#list").text();//试验一下SCRIPT标签的用法
   var compiled = _.template($("#list").text());
   var test=compiled({"Receipt":Receipt});
   $(".row").after(test);
 // alert(test);
//    var compiled = _.template($("#table1").text());
//    var test=compiled("Receipt":Receipt);
//    $(".row").after(test);
//  //  alert($(test.text()));
//    alert($("#table1").text());
})
