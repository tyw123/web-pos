$(document).ready(function(){
    var s=JSON.parse(localStorage.getItem("a"));
    var Receipt=printInventory(s);
    var result=s.length;
    var compiled = _.template('<% _.forEach(users, function(user) { %><th><%- user %></th><% }); %>');
    for(var i=0;i<s.length;i++){
//    debugger
//        var name="<th>"+Receipt.item[i].name+"</th>";
//        var unit="<th>"+Receipt.item[i].price+"</th>";
//        var num="<th>"+Receipt.item[i].num+"</th>";
//        var gift="<th>"+Receipt.gift[i].num+"</th>";
//        var pri="<th>"+Receipt.item[i].total+"</th>";
    //    var total=$("<tr>"+name+unit+num+gift+pri+"</tr>");
        var test=compiled({ 'users': [Receipt.item[i].name,
                                      Receipt.item[i].price,
                                      Receipt.item[i].num,
                                      Receipt.gift[i].num,
                                      Receipt.item[i].total]});
      //  var test=compiled({ 'users': Receipt});
        var total=$("<tr>"+test+"</tr>");
//        alert("1")

        $(".table1 tbody").prepend(total);
    }
//    var total=$("<th>"+Receipt.total+"</th>");
//    $(".table2 tr:last").prepend(total);
//    var saved=$("<th>"+Receipt.saved+"</th>");
//    $(".table2 tr:last").prepend(saved);
//    var money=(Number(Receipt.total)+Number(Receipt.saved)).toFixed(2);
//    var price=$("<th>"+money+"</th>");
//    $(".table2 tr:last").prepend(price);
    var t2=compiled({ 'users': [(Number(Receipt.total)+Number(Receipt.saved)).toFixed(2),Receipt.saved,Receipt.total]});
    var to2=$("<tr>"+t2+"</tr>");
     $(".table2 tr:last").prepend(t2);
   // alert(t2)
    })
//
//    var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
//    compiled({ 'users': ['fred', 'barney'] });