
allButtons = document.querySelectorAll(".btn");





onReset();
function onReset() {
    let arr = [];
    let index = 0;
    while (arr.length !== 9) {
        let num = Math.floor(Math.random() * 9 + 1);
        if (arr.indexOf(num) === -1) {
            arr[index] = num;
            index++;
        }
    }



    
    let indexof9 = arr.indexOf(9); 
    arr[indexof9] = "";
    let emptyIndex = arr.indexOf("");
     



    allButtons.forEach(function (button, index) {
        button.value = arr[index];
    }) 
    
    even(emptyIndex);

    function even(val) { 
        let button = document.getElementById("btn" + emptyIndex)
        let clkButton = document.getElementById("btn" + val) || val;



        arr[emptyIndex] = parseInt(allButtons[val].value);
        button.value = arr[val];

        arr[val] = "";
        clkButton.value = "";

        emptyIndex = arr.indexOf("");

        allButtons.forEach(function (button, index) {

            if (emptyIndex === 3) {
                (index === emptyIndex + 1 || index === emptyIndex - 3 || index === emptyIndex + 3) ? button.disabled = false : button.disabled = true;
            }
            else if (emptyIndex === 5) {
                (index === emptyIndex - 1 || index === emptyIndex - 3 || index === emptyIndex + 3) ? button.disabled = false : button.disabled = true;
            }
            else if (emptyIndex === 2) {
                (index === emptyIndex - 1 || index === emptyIndex + 3) ? button.disabled = false : button.disabled = true;
            }
            else if (emptyIndex === 6) {
                (index === emptyIndex + 1 || index === emptyIndex - 3) ? button.disabled = false : button.disabled = true;
            }
            else {
                (index === emptyIndex + 1 || index === emptyIndex - 1 || index === emptyIndex - 3 || index === emptyIndex + 3) ? button.disabled = false : button.disabled = true;
            }
        })

    }
}