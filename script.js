function myfunction(x)
        {
            if (x=="Yuvraj")
            {
                document.getElementById("message").innerHTML="Exist";
                document.getElementById("message").style.color="red";
            }
            else
            {
                document.getElementById("message").innerHTML="AVAILABLE !";
                document.getElementById("message").style.color="green";
            }
        }