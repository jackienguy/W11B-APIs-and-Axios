function showAdvice (){
    axios.request(
        {
            method: "GET",
            url:"https://api.adviceslip.com/advice"
        
    }).then(getAdvice).catch(adviceFailure);
}


function getAdvice (response){
    console.log(response);
    document.getElementById('yourAdvice').innerText = response.data.slip.advice;
}

function adviceFailure (error) {
    console.error("Uh oh...Something went wrong");
    console.error(error);
}

let button = document.getElementById("infoBtn");
button.addEventListener("click", showAdvice);


