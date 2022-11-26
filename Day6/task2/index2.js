var flag=1;
var x;
function goNext()
{
    
   // var x=document.getElementById("pic").src;
  
    if(flag<6)
    {
        
        document.getElementById("pic").src="images/"+(++flag)+".jpg";
        //flag++
    }
    

}

function goBack()
{
  if (flag>1)
  {
    document.getElementById("pic").src="images/"+(--flag)+".jpg";
  }
}

function slideShow()
{
    
   x= setInterval(function()
    {
        if(flag==6)
        {
            flag=0
        }
        document.getElementById("pic").src="images/"+(++flag)+".jpg";
        
   
    },2000)
}

function stop()
{
    clearInterval(x);
}



