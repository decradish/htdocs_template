/*******************************************************
@ This JavaScript file is created
@ For     : htdocs_template
@ On      : 25th Dec 2010
@ By      : Liu Kangning
@ Github  : https://github.com/decradish/htdocs_template
@ Email   : liukangning@gmail.com
@ QQ      : 410532598
********************************************************/

//date format
Date.prototype.format = function(format)
{
 var o = {
	 "M+" : this.getMonth()+1, //month
	 "d+" : this.getDate(),    //day
	 "h+" : this.getHours(),   //hour
	 "m+" : this.getMinutes(), //minute
	 "s+" : this.getSeconds(), //second
	 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
	 "S" : this.getMilliseconds() //millisecond
 }
 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
 for(var k in o)if(new RegExp("("+ k +")").test(format))
 format = format.replace(RegExp.$1,
 RegExp.$1.length==1 ? o[k] :
 ("00"+ o[k]).substr((""+ o[k]).length));
 return format;
}
/*
var d = new Date();
d.format(‘yyyy-MM-dd‘);
 */

//filter blank
function cTrim(sInputString,iType)
{
	var sTmpStr = ' '
	var i = -1

	if(iType == 0 || iType == 1)
	{
	 while(sTmpStr == ' ')
	  {
	   ++i
	   sTmpStr = sInputString.substr(i,1)
	  }
	 sInputString = sInputString.substring(i)
	}

	if(iType == 0 || iType == 2)
	{
	  sTmpStr = ' '
	  i = sInputString.length
	  while(sTmpStr == ' ')
	   {
	    --i
	    sTmpStr = sInputString.substr(i,1)
	   }
	  sInputString = sInputString.substring(0,i+1)
	}
	 return sInputString
}

//if(cTrim(document.getElementById('blank').value,0) == ''){alert('Haha!');}


function checkemail(){
	var str=cTrim(document.getElementById('ifc_submitted_email').value,0);
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (filter.test(str))
		testresults=true
	else{
		//alert(str);
		testresults=false
	}

	return (testresults)
}



//verify dd/mm/yyyy or dd.mm.yyyy or dd-mm-yyyy
function check(num){ 
	var a=/^(?:(?:(?:0?[1-9]|1[0-9]|2[0-8])([-/.]?)(?:0?[1-9]|1[0-2])|(?:29|30)([-/.]?)(?:0?[13-9]|1[0-2])|31([-/.]?)(?:0?[13578]|1[02]))([-/.]?)(?!0000)[0-9]{4}|29([-/.]?)0?2([-/.]?)(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00))$/;
	if (!a.test(num)){ 
		alert("no!")
	} 
	else 
		alert("yes!")
}

//check("01/01/2222");

//print function by Kangning on 2011-6-9
function print_dom_in(oper){
	if (oper < 10){
		sprnstr="<!--startprint"+oper+"-->";//set start position
		eprnstr="<!--endprint"+oper+"-->";//set end position
		
		bdhtml=window.document.body.innerHTML;//get all html for the page
		
		prnhtml=bdhtml.substring(bdhtml.indexOf(sprnstr)+18); //get html in front of start
		prnhtml=prnhtml.substring(0,prnhtml.indexOf(eprnstr));//get html behind of end
		window.document.body.innerHTML=prnhtml;
		window.print();
		window.location.reload();
		//window.document.body.innerHTML=bdhtml;
	
	} else{
		window.print();
	}
}

$(function() {
    if (window.PIE) {
        $('*').each(function() {
            PIE.attach(this);
        });
    }
});