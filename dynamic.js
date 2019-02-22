function getdata(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
	if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
	}
}
xhr.send(null);
}
getdata("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
    personalinfo(data.profile);
    career(data.career);
    education(data.education);
})
// main1
 var left=document.querySelector(".main1");
function personalinfo(pi){

 var image=document.createElement("img");
    // image.src="contact.jpg";
   image.src=pi.img;
   left.appendChild(image);

 var name=document.createElement("h1");
   name.textContent=pi.name;
   left.appendChild(name);

 var roll=document.createElement("h3");
   roll.textContent=pi.roll;
   left.appendChild(roll);

 var hr=document.createElement("hr");
   left.appendChild(hr);

 var place=document.createElement("p");
   place.textContent=pi.place;
   left.appendChild(place);

   var email=document.createElement("p");
     email.textContent=pi.email;
     left.appendChild(email);
}
// main2
    var right=document.querySelector(".main2");
 // career objective
function career(ca){
    var heading=document.createElement("h1");
      heading.textContent="career objective";
     // info.textContent=c.info;
      right.appendChild(heading);
    var hr=document.createElement("hr");
      right.appendChild(hr);
    var career=document.createElement("p");
      career.textContent=ca.info;
      right.appendChild(career);
}
// educationaldetails
function education(ed){
	var heading=document.createElement("h1");
	  heading.textContent="Education Details";
	  right.appendChild(heading);

	var hr=document.createElement("hr");
	  right.appendChild(hr);

	var table=document.createElement("table");
	  table.border ="2";
	  var tr1="<tr><th>S.No</th><th>Degree</th><th>Institute</th><th>Per</th><th>YOP</th></tr>";
      var tr2="";
      for(var i=0;i<ed.length;i++){
      	tr2=tr2+"<tr><td>"+ed[i].sno+"</td><td>"+ed[i].degree+"</td><td>"+ed[i].institute+"</td><td>"+ed[i].per+"</td><td>"+ed[i].yop+"</td></tr>";
      }
      table.innerHTML=tr1+tr2;
      right.appendChild(table);
  }
