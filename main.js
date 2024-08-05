

let randomBtn = document.getElementById("random_btn");


function changePerson(){
    let personIndex = Math.floor(Math.random()*dataObj.length);

    let selectedPerson = dataObj[personIndex];

    face = document.querySelector("#image");
    face.src = selectedPerson.large;

    
    insert_name = document.getElementById("name");
    insert_name.innerText = "Hi I'm: " + selectedPerson.name[1].id +" "+ selectedPerson.name[2].id;
}

randomBtn.addEventListener("click", changePerson);
