const review =[
{
        id:1,
        name: 'Susan Smith'
        job: 'Scientist',
        img: '#',
        text:''
    },

  {
    id: 2,
    name: 'john doe',
    job: 'Developer',
    img: '#',
    text: 'Sample text for John'
  },
  {
    id: 3,
    name: 'peter john',
    job: 'Teacher',
    img: '#',
    text: 'blah blah blah'
  }
];
const img = document.getElementById("person-img");
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

// Load initial item
window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem);
});

// Show person based on index
function showPerson(personIndex) {
  const item = reviews[personIndex];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0; // loop back to start
  }
  showPerson(currentItem);
});

// Show previous person
prevBtn.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1; // loop back to last
  }
  showPerson(currentItem);
});
    {
        
    }

console.log("Hello World!");

//string has quotes/number no quotes
let myTest = "123";
console.log(typeof myTest);

console.log(10 + " eggs");
console.log(10 + 8 + " eggs");
console.log("eggs "+10 +8);

//Bot comditions need to be true
console.log(7>3)&&(5>2);

//Only one condion must be true
console.log(10>3)||(10>12);

//Logical not 
console.log(!5>3);

function introduction(name,age){
    console.log("Hello, my name is "+ name +" and I am "+ age + " years old.");
}

introduction("Musharaf" ,15)

const hour =new Date().getHours();
let greeting ="";

if (hour<12){
    greeting= "Good morning ☀️";
}else if (hour<18){
    greetings ="Good afternoon 🌥️";
}else{
    greeting = "Good evening🌙";
}

document.getElementById("greeting").innerText = greeting;







    

    







    

    
