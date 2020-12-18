var lib =  ["BlackBoard","Find My Lectuer","COVID-19","Campus Map","News","Evision","Outlook","Home","News","UEA Vacancies","Latest News","Staff","Students",
"How lateral testing works","Travelling after testing","Lateral Testing FAQs","COVID-19 Lateral Testing","COVID Testing - Placement Student","COVID Testing Steps",
"Introduction to My.UEA","My Wellbeing","Being a New Student","Being a New Staff Member","Learning","IT Support","Learning Policies and Regulations","UEA Jargon and Acronyms",
"Events","Listings","Vice-Chancellor's Office","Vice-Chancellor","The Executive Team","Chancellor","University Strucutre","UEA 2030 Vision","Teaching Fellows",
"Faculties and Schools","Faculty of Arts and Humanities","Faculty of Medicine and Health Sciences","Graduate School","School of Art, Media and American Studies",
"Interdisciplinary Institute for the Humanities","School of Literature, Drama and Creative Writing","School of History","School of Politics, Philosophy, Language and Communication Studies",
"HUM Research Ethics Committee","Faculty Research","Strategic Plans, Roles and Staff Guides","Faculty funding opportunities","Research Community and Facilities",
"Personal and Professional Development","News and Events","LDC News and Announcements","LDC Events","History Students","History Staff","Policy@UEA","Welcome to the School",
"Faculty Support","Research News","Fellowships","UEA Archives and Collections Visiting Fellowships","Faculty plans","Faculty roles","Faculty staff guides",
"Support for Research","Social Sciences Staff","Equality & Diversity","Committee","Career Development Opportunities","Research Mentoring","Log an IT Call",
"Campus Map","HSC Administrative Team","The Workforce Hub","Technical Staff","New Students & Apprentices","Pre-registration Master's & TNAs","Post-registration, postgraduate and further studies",
"COVID Advice for HSC Students on Campus","Prizes & Awards","Norwich Medical School","Library","People and Culture","Research and Innovation","Safety Services",
"Sport and Commercial Services","Student and Academic Services","Student Services","Faith Centre","Learning and Teaching"];

var lecture = [["Dan Smith","CMP","dansemail@uea.ac.uk","2.37"],["lecture","CMP","someempail@uea.ac.uk","8.234"],["Lisa","SCI","anotherEmial@uea.ac.uk","8.234"],["Edwin","CMP","dansemail@uea.ac.uk","2.07"],["somePerson","CMP","someempail@uea.ac.uk","8.94"],["Bart","SCI","anotherEmial@uea.ac.uk","2.29"]["Dan Smith","CMP","dansemail@uea.ac.uk","2.37"],["lecture","CMP","someempail@uea.ac.uk","8.234"],["Lisa","SCI","anotherEmial@uea.ac.uk","8.234"],["Edwin","CMP","dansemail@uea.ac.uk","2.07"],["somePerson","CMP","someempail@uea.ac.uk","8.94"],["Bart","SCI","anotherEmial@uea.ac.uk","2.29"]["Dan Smith","CMP","dansemail@uea.ac.uk","2.37"],["lecture","CMP","someempail@uea.ac.uk","8.234"],["Lisa","SCI","anotherEmial@uea.ac.uk","8.234"],["Edwin","CMP","dansemail@uea.ac.uk","2.07"],["somePerson","CMP","someempail@uea.ac.uk","8.94"],["Bart","SCI","anotherEmial@uea.ac.uk","2.29"]["Dan Smith","CMP","dansemail@uea.ac.uk","2.37"],["lecture","CMP","someempail@uea.ac.uk","8.234"],["Lisa","SCI","anotherEmial@uea.ac.uk","8.234"],["Edwin","CMP","dansemail@uea.ac.uk","2.07"],["somePerson","CMP","someempail@uea.ac.uk","8.94"],["Bart","SCI","anotherEmial@uea.ac.uk","2.29"]]


function fuzzySearch(x){
    fuzzyItems = 0;
    list = document.getElementById("dropDown");
    list.innerHTML='';
    if(x.value != ''){
    for(i=0; i < lib.length; i++){
     if(lib[i].toLowerCase().includes(x.value.toLowerCase()) && fuzzyItems < 10){
         fuzzyItems++;
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

function togglecssLight(){
    var a = document.getElementById("style1");
    a.x = 'MainStyleSheet' == a.x ? './scripts/DarkModeStyleSheet' : './scripts/MainStyleSheet'; // short if
    a.href = a.x + '.css';
    icon = document.getElementById("sunButton");
    icon.hidden = false;
    icon = document.getElementById("moonButton");
    icon.hidden = true;
}

function togglecssDark(){
    var a = document.getElementById("style1");
    a.x = 'MainStyleSheet' == a.x ? './scripts/DarkModeStyleSheet' : './scripts/MainStyleSheet'; // short if
    a.href = a.x + '.css';
    icon = document.getElementById("moonButton");
    icon.hidden = false;
    icon = document.getElementById("sunButton");
    icon.hidden = true;
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
  for(r=0; r< lecture.length; r++){
    if(lecture[r][0].toLowerCase().includes(x.value.toLowerCase())){
    row = document.createElement('tr');
    row.className = "forceWhite";
    if(lecture[r][0] == "Dan Smith"){
        row.onclick = function(){
           bttn = document.getElementById("test");
           bttn.click();
        };
    }
    header = document.createElement('th');

    for(c = 0; c < 4; c++){
        coloum = document.createElement('td');
        coloum.appendChild(document.createTextNode(lecture[r][c]));
        row.appendChild(coloum);
    }
    table.appendChild(row);
   }
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
    row.className = "forceWhite";
    if(sortedList[r][0] == "Dan Smith"){
        row.onclick = function(){
           bttn = document.getElementById("test");
           bttn.click();
        };
    }
    header = document.createElement('th');

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
