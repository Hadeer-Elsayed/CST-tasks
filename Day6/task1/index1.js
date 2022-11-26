var z,x,y,n;
function getStringQuery()
{
    //.....getting location
    var form=location.search;
    x=form.slice(1);
    y=x.split("&");
   
   //..... making associative array and fill it by url data
   var assArr=[];
   for(i=0;i<y.length;i++)
   {
    var item= y[i].split("=");
    assArr[item[0]]=item[1].replace("%40","@");
   }
   if(assArr["first_name"])
   {
    alert("Hello "+assArr["first_name"]);
   }


   //......display data in display_page
  document.getElementById("fname").innerHTML="your name is: "+assArr["first_name"];
  document.getElementById("address").innerHTML="your address is: "+assArr["address"];
  document.getElementById("phone_number").innerHTML="your phone_number is: "+assArr["phone_number"];
  document.getElementById("email").innerHTML="your Email is: "+assArr["Email"];
  document.getElementById("gender").innerHTML="your Gender is: "+assArr["Gender"];   
    
}
getStringQuery()