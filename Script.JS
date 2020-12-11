var lib =  ["test","word","cats","dogs","fish","words","login","search","glow","game","head","music"];

var lecture = [["Dan Smith","CMP","dansemail@uea.ac.uk","2.37"],["lecture","CMP","someempail@uea.ac.uk","8.234"],["Bart","SCI","anotherEmial@uea.ac.uk","8.234"]]

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



function getLectueres(){    
  table = document.getElementById("tab");
  table.innerHTML= "  <th>Lecture</th> <th>School</th> <th>Email</th> <th>Office</th>";
  for(r=0; r< lecture.length; r++){
    row = document.createElement('tr');
    for(c = 0; c < 4; c++){
        coloum = document.createElement('td');
        coloum.appendChild(document.createTextNode(lecture[r][c]))
        row.appendChild(coloum)
    }
    table.appendChild(row)
   }
}

function updateLectures(sortedLecturers){    
  table = document.getElementById("tab");
  table.innerHTML= "  <th>Lecture</th> <th>School</th> <th>Email</th> <th>Office</th>";
    for(r=0; r< lecture.length; r++){
    row = document.createElement('tr');
    for(c = 0; c < 4; c++){
        coloum = document.createElement('td');
        coloum.appendChild(document.createTextNode(sortedLecturers[r][c]))
        row.appendChild(coloum)
    }
    table.appendChild(row)
   }
}

function sortLectueres(){

    sortedLecturers = lecture.sort(function(a,b) {
        if(a[0] < b[0]) return -1;
        else if (a > b) return 1;
        return 0;
    });
    updateLectures(sortedLecturers)



}