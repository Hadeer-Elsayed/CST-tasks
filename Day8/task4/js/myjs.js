function ask(evt) {

    /*var respond =*/ confirm("do you want to continue submition or not !");
   /* if (!respond){
           evt.preventDefault();   
        
    }*/

     
}


  // create 
  var myEvent = new Event("noresponse");  // event name :  noresponse


  // listen 
  document.getElementById("form1").addEventListener("noresponse", function () {

      document.getElementById("fire").innerHTML = "you did not enter any data";
  });

function we() {
        setInterval(function () {
            var empt = document.forms["form1"]["name"].value;
            //if (empt == "") {
           
            document.getElementById("form1").dispatchEvent(myEvent);
                //alert("Ay 7aga");
        //}
                   // else {
            //document.getElementById("fire").innerHTML = "you enter data";
       // }
        }, 3000);
}
