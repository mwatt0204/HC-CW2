var lib =  ["BlackBoard","FindMyLectuer","COVID-19","dogs","fish","words","login","search","glow","game","head","music"];

var lecture = [["Dan Smith","CMP","dansemail@uea.ac.uk","2.37"],["lecture","CMP","someempail@uea.ac.uk","8.234"],["Bart","SCI","anotherEmial@uea.ac.uk","8.234"],]




function fuzzySearch(x){
 list = document.getElementById("dropDown");
    list.innerHTML='';
    if(x.value != ''){
    for(i=0; i< lib.length; i++){
     if(lib[i].includes(x.value)){
 //        alert("yes");
         li = document.createElement('button');
         li.className = "result"
         brake = document.createElement('br');
         word = document.createTextNode(lib[i]);
         li.appendChild(word);
         list.appendChild(li);
         list.appendChild(brake);
     }
     }
    }
}


function enableTabelSearch(){

}


function fuzzySearchLeacture(x){
  table = document.getElementById("TableBody");
  table.innerHTML= "";
       if(x.value != ''){
       for(r=0; r< lecture.length; r++){
        if(lecture[r][0].toLocaleLowerCase().includes(x.value.toLocaleLowerCase())){
            row = document.createElement('tr');
            header = document.createElement('th');
            header.scope = "row";
            header.appendChild(document.createTextNode(r));
            row.appendChild(header);
            for(c = 0; c < 4; c++){
                coloum = document.createElement('td');
                coloum.appendChild(document.createTextNode(lecture[r][c]));
                row.appendChild(coloum);
            }
            table.appendChild(row);
        }
        }
        }
        else{
            getLectueres();
        }
       }
   
   
   


function getLectueres(){    
  table = document.getElementById("TableBody");
  table.innerHTML= "";
  for(r=0; r< lecture.length; r++){
    row = document.createElement('tr');
    header = document.createElement('th');
    header.scope = "row";
    header.appendChild(document.createTextNode(r));
    row.appendChild(header);
    for(c = 0; c < 4; c++){
        coloum = document.createElement('td');
        coloum.appendChild(document.createTextNode(lecture[r][c]));
        row.appendChild(coloum);
    }
    table.appendChild(row);
   }
}



function updateLectures(sortedList){    
    table = document.getElementById("TableBody");
  table.innerHTML= "";
  for(r=0; r< lecture.length; r++){
    row = document.createElement('tr');
    if(sortedList[r][0] == "Dan Smith"){
        row.onclick = function(){
           bttn = document.getElementById("test");
           bttn.click();
        };
    }
    header = document.createElement('th');
    header.scope = "row";
    header.appendChild(document.createTextNode(r));
    row.appendChild(header);
    for(c = 0; c < 4; c++){
        coloum = document.createElement('td');
        coloum.appendChild(document.createTextNode(sortedList[r][c]));
        row.appendChild(coloum);
    }
    table.appendChild(row);
   }

}

function sortLectueresAtoZ(){

    sortedLecturers = lecture.sort(function(a,b) {
        if(a[0] < b[0]) return -1;
        else if (a > b) return 1;
        return 0;
    });
    icon = document.getElementById("SortButtonZtoA");
    icon.hidden = false;
    icon = document.getElementById("SortButtonAtoZ");
    icon.hidden = true;
     updateLectures(sortedLecturers);
}

function sortLectueresZtoA(){

    sortedLecturers = lecture.sort(function(a,b) {
        if(a[0] < b[0]) return 1;
        else if (a > b) return -1;
        return 0;
    });
    icon = document.getElementById("SortButtonZtoA");
    icon.hidden = true;
    icon = document.getElementById("SortButtonAtoZ");
    icon.hidden = false;
    updateLectures(sortedLecturers);

}


//needs working on 
function checkDate(e){
    date = document.getElementById("datepicker").value;
    times = document.getElementById("timeselector");
    placeholder = document.getElementById("placeholdertextforTime");
    if(e != null)
 {
     times.disabled = false;
    placeholder.innerHTML = "Please chose A time";
 }
 else
 {
     times.disabled = true;
    placeholder.innerHTML = "Please Select a vaild Date First";
 }
}


function BookTest(){
    bttn = document.getElementById("test");
    bttn.click();
}
