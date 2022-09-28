let fetchDataBtn = document.getElementById("btn");
let result = document.getElementById("result");
let pininput = document.getElementById("pincode");

const url="https://www.fishwatch.gov/api/species"

fetchDataBtn.addEventListener("click",async() => {
        result.innerHTML ="loading...";

        try{
                const response = await fetch(url);
                const object = await response.json();
             
                result.innerHTML = `
            <h1>${object[0].name}</h1>
                `;

        }catch(error){
                result.innerHTML = error;

        }




});



