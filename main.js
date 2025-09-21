window.addEventListener("load", ()=> {

clock();
function clock() 
{ const today=new Date();

//time type shi
const hours=today.getHours();
const minutes=today.getMinutes();
const seconds= today.getSeconds();

const hour =hours < 10 ? "0" + hours : hours;
const minute =minutes < 10 ? "0" + minutes:minutes;
const second =seconds < 10 ? "0"+ seconds:seconds;


//12hr format cause i am stupid
const hourTime=hour>12 ? hour -12: hour;
const ampm= hour<12 ? "AM" : "PM";


//date thingamabobs

const month = today.getMonth();
const year = today.getFullYear();
const day = today.getDate();;

//iughhhhh
const monthList=[
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];


const date= monthList[month]+" "+day+","+year;
const time=hourTime + ":" + minute +":" + second + ampm;


const dateTime=date + "  -  " + time;

//printing thing
document.getElementById("date-time").innerHTML=dateTime;
setTimeout(clock,1000);
}
}
);





