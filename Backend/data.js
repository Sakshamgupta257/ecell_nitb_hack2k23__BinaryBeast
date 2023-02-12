const employeerData = {
  


    "Result":[{
        "Name" : "Infosys",
        "Skills" : "Mern Stack Developer",
        "vacancies" : 5,
        "Sector" : "Development",
        "Date" : "2022-02-12",
        "desc" : "We need a MERN Stack Developer"
},
{
  "Name" : "TCS",
  "Skills" : "Dev-Ops Engineer",
  "vacancies" : 10,
  "Sector" : "Cloud",
  "Date" : "2022-02-01",
  "desc" : "TCS is Hiring Dev-Ops Engineers for batch 2023"
},
{
  "Name" : "Accenture",
  "Skills" : "Java Enterprise Developer",
  "vacancies" : 4,
  "Sector" : "JAVA",
  "Date" : "2022-02-10",
  "desc" : "Accenture is Hiring Java Enterprise Developer"
},
{
  "Name" : "Wipro",
  "Skills" : ["Cyber Security Analyst","colud","av"],
  "vacancies" : 5,
  "Sector" : "Cyber Computing",
  "Date" : "2022-02-05",
  "desc" : "Wipro is hiring Cyber Security Analyst"
},

{
  "Name" : "Cognizant",
  "Skills" : "Pega Development Professional",
  "vacancies" : 5,
  "Sector" : "Engineering",
  "Date" : "2022-02-01",
  "desc" : "Pega Development Professional. 2- 9 of experience in Pega Development with Pega relevant certification. Good knowledge around integration and exposure to REST and SOAP APIs."
},

{
  "Name" : "IBM",
  "Skills" : "Infrastructure Specialist",
  "vacancies" : 10,
  "Sector" : "Cyber Application Operation",
  "Date" : "2022-02-04",
  "desc" : "IBM hiring Technical Infrastructure Specialist "
}]
}


//verifying employeerData

const studData = [
  {
    "Name" : "Mohit Namdev",
    "Couse" : "B.Tech CSE",
    "CGPA" : 9.00,
    "Skills":['ReactJS','Frontend Development','Video Editing'],
    "Placed": true,
    "Resume" :"" 

  },
  {
    "Name" : "Aayan Ali",
    "Couse" : "B.Tech IT",
    "CGPA" : 8,
    "Skills":['Cyber Security','Graphic Desining'],
    "Placed": true,
    "Resume" :"" 

  },
  
  {
    "Name" : "Hitika Ghanani",
    "Couse" : "B.Tech CSE",
    "CGPA" : 9.1,
    "Skills":['Express Developer','Django Developer'],
    "Placed": true,
    "Resume" :"" 

  },
  {
    "Name" : "Krishna Gupta",
    "Couse" : "B.Tech CSE",
    "CGPA" : 8.00,
    "Skills":['Video Editing','UI Designing'],
    "Placed": false,
    "Resume" :"" 

  },

  {
    "Name" : "Nishta Gupta",
    "Couse" : "B.Tech CSE",
    "CGPA" : 9.1,
    "Skills":['pHp Developer'],
    "Placed": true,
    "Resume" :"" 

  },

  {
    "Name" : "Saksham Gupta",
    "Couse" : "B.Tech CSE",
    "CGPA" : 8.69,
    "Skills":['Backend Engineer','Competitive Programming'],
    "Placed": false,
    "Resume" :""

  },
  

]


let namee = document.getElementById("name");
let obj = JSON.parse(JSON.stringify(employeerData));

class myData{
    constructor(pose){
        this.pose = pose
    }
  
    update(a){
        this.pose+=a;
        namee.innerHTML = obj.Result[this.pose].Name;
    }
    next(){
        this.update(-1);
    }
    prev(){
        this.update(1);
    }
    reset(){
        this.pose = this.current
        this.timer()
    }
}

let gar = new myData(48);
gar.update(-1);

console.log(obj[0]);


