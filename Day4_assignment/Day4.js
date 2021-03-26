var name1=document.getElementsByClassName('name');
console.log(name1[0].value);

var tag1=document.getElementsByTagName('h1');
console.log(tag1[0].value);
tag1[0].innerHTML="<h1>c++</h1>";
console.log(tag1[0].value);

var id1=document.getElementById('id1');
console.log(id1);