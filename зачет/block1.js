cred = [1200000, 5000000, 2400000, 7000000]
years=[12.6, 11.4, 15.3, 12.8]
function btnClick()
        {
            /*выдается минимальный процент*/
            alert("bbbbbbb")
        }
        //-->
function credit()
        {
            var tb = document.getElementById("tb");
            var sel = document.getElementById("sel");
            
            //tb.value+="a"
            tb.value ="Кредит: "+cred[sel.selectedIndex];
            tb.value +="\n"+years[sel.selectedIndex]+"% годовых";
            
            
        }
        //-->
