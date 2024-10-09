let output = document.querySelector("#output");
        let inputbox = document.querySelector("#input");
        // input.addEventListener("click", change)
        function change(){
            let input = document.querySelector("#input").value;
            let a = input.split('');
            let b = a.reverse();
            let c = b.join('');
            if(input == c){
            output.innerHTML = "It is a Symmetric";
            output.style.color = "green";
        }
        else{
            output.innerHTML = "It is not a Symmetric";
            output.style.color = "red";
        }
        }