


document.getElementById("calc").addEventListener("click", myFunction);
document.getElementById("clr").addEventListener("click", clearall);


function clearall(){
    var funit = document.getElementById("funit").value ='';
    var fprice = document.getElementById("fprice").value='';

    var sunit = document.getElementById("sunit").value='';
    var sprice = document.getElementById("sprice").value='';
    document.getElementById("fbr").innerText = '';
    document.getElementById("sbr").innerText = '';

    document.getElementById("tu").innerText = 'Total Unit = ';

    document.getElementById("avg").innerText = 'Avg Price = ';

    document.getElementById("ta").innerText = 'Total Amount = ';
}




function myFunction() {
    var funit = document.getElementById("funit").value;
    var fprice = document.getElementById("fprice").value;

    var sunit = document.getElementById("sunit").value;
    var sprice = document.getElementById("sprice").value;

   if(funit== '' || fprice == '' || sunit == '' || sprice == '')
   {
       alert('Fill all Column');
       return false;
   }
    f_sub_res = eval(funit*fprice)
    dtext = "Amount Invested = "
    sub_res_ad = dtext + f_sub_res;
    document.getElementById("fbr").innerText = sub_res_ad;


    s_sub_res = eval(sunit*sprice);
    dtext = "Amount Invested = "
    sub_res = dtext + s_sub_res;
    document.getElementById("sbr").innerText = sub_res;

    funit = parseInt(funit);
    sunit=parseInt(sunit);
    addd = add(funit,sunit);
    dtext = 'Total Unit = ';
    sub_res_aa = dtext + addd;
    document.getElementById("tu").innerText = sub_res_aa;

    avg = eval(f_sub_res + s_sub_res )
    avg=(avg/addd);
    dtext = 'Avg Price = ';
    s_avg = dtext + avg;
    document.getElementById("avg").innerText = s_avg;

    tm = f_sub_res +s_sub_res;
    dtext = 'Total Amount = ';
    s_tm = dtext + tm;
    document.getElementById("ta").innerText =s_tm;   
}
function add(a,b){
    return a + b ;
}
