var lib =  ["BlackBoard","Find My Lectuer","COVID-19","Campus Map","News","Evisoin","Outlook","Home"];

var lecture = [["Dan Smith","CMP","dansemail@uea.ac.uk","2.37"],["lecture","CMP","someempail@uea.ac.uk","8.234"],["Bart","SCI","anotherEmial@uea.ac.uk","8.234"],]




function fuzzySearch(x){
 list = document.getElementById("dropDown");
    list.innerHTML='';
    if(x.value != ''){
    for(i=0; i< lib.length; i++){
     if(lib[i].toLowerCase().includes(x.value.toLowerCase())){
 //        alert("yes");
         li = document.createElement('button');
         li.className = "result"
         if(lib[i] == "Find My Lectuer"){
         li.onclick = function(){
            location.href = "FindMyLecture.html";
         }
        }
         else if(lib[i] == "COVID-19"){
            li.onclick = function(){
                location.href = "Covid19.html";
         }
        }
        else if(lib[i] == "Home"){
            li.onclick = function(){
                location.href = "Home2.html";
         }
        }
         brake = document.createElement('br');
         word = document.createTextNode(lib[i]);
         li.appendChild(word);
         list.appendChild(li);
         list.appendChild(brake);
     }
     }
    }
}

function togglecss(){
  var a = document.getElementById("style1");
  a.x = 'MainStyleSheet' == a.x ? 'DarkMOdeStyleSheet' : 'MainStyleSheet'; // short if
  a.href = a.x + '.css';
}


function test(){
    alert("test");
}

function fuzzySearch2(x){
    list = document.getElementById("dropDown2");
       list.innerHTML='';
       if(x.value != ''){
       for(i=0; i< lib.length; i++){
        if(lib[i].toLowerCase().includes(x.value.toLowerCase())){
    //        alert("yes");
            li = document.createElement('button');
            li.className = "result"
            if(lib[i] == "Find My Lectuer"){
            li.onclick = function(){
               location.href = "FindMyLecture.html";
            }
           }
            else if(lib[i] == "COVID-19"){
               li.onclick = function(){
                   location.href = "Covid19.html";
            }
           }
           else if(lib[i] == "Home"){
               li.onclick = function(){
                   location.href = "Home2.html";
            }
           }
            brake = document.createElement('br');
            word = document.createTextNode(lib[i]);
            li.appendChild(word);
            list.appendChild(li);
            list.appendChild(brake);
        }
        }
       }
   }







function simulateLoading(){
    setTimeout(function(){
        document.getElementById("closeLoading").click();
        document.getElementById("BookedTest").click();
    } ,4000)

}



function showAvailableDates(){

    times = document.getElementById("times");
    testDate = new Date("2020-12-22");
    testDate2 = new Date("2020-12-23");
    date = document.getElementById("datefiled").value;
    date2 = new Date(date);
    if(date2.getTime() == testDate.getTime() || date2.getTime() == testDate2.getTime()){
        times.disabled = false;
        document.getElementById("placeholdertextforTime").innerHTML ="Please Select a avalibal Time";
    }
    else{
     document.getElementById("times").disabled = true;
     document.getElementById("placeholdertextforTime").innerHTML ="No times Avalibale on Selected Dates";
     times.value = "No times Avalibale on Selected Dates";
    
    }
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
