const APIkey = '89aad6c45eecd97afdf219d515842d0d'

// Getting Elements
const text = document.getElementById("text");
const inputField = document.getElementById("inputField");
   


const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
})




inputField.addEventListener('change',(e)=>{
    city=e.target.value
    const API =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
    console.log(API);
    const getData = () => {
   
        fetch(API)
        .then((response) =>{return response.json()})
        .then((data) => {
            text.textContent +=data.main.temp
            console.log(data) 
        } )
    }
    getData()
})

function updateDate() {
    // Get the current date and time
    const today = new Date();

    // Format the date as desired
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('en-US', dateOptions);

    // Display the date in the specified div element
    let date = document.getElementById('date');
    date.innerText = formattedDate;

    
  }
   
  // Update the date initially
  updateDate();

  // Update the date every second (1000 milliseconds)
  setInterval(updateDate, 1000);


