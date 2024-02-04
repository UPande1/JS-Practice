const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");



buttons.forEach(function(button) { 
    button.addEventListener('click', function(e){
        switch (e.target.id) { 
            case "White":
                body.style.backgroundColor = e.target.id;
                break;

            case "Yellow":
                body.style.backgroundColor = e.target.id;
                break;

            case "Blue":
                body.style.backgroundColor = e.target.id;
                break;

            case "Red":
                body.style.backgroundColor = e.target.id;
                break;
        }
    }) 

    
})