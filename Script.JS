var lib =  ["test","word","cats","dogs","fish","words","login","search","glow","game","head","music"];

function fuzzySearch(x){
 list = document.getElementById("sugestoins");
    list.innerHTML='';
    if(x.value != ''){
    for(i=0; i< lib.length; i++){
     if(lib[i].includes(x.value)){
 //        alert("yes");
         li = document.createElement('li');
         word = document.createTextNode(lib[i]);
         li.appendChild(word);
         list.appendChild(li);
     }
     }
    }
}