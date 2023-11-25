let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let user = document.getElementById("user").value;
    let output = document.getElementById("output");
    let result = document.getElementById("result");

    let cpuG = Math.random() * 3;
    cpuG = Number.parseInt(cpuG);

    let cpu = ["R", "P", "S"][cpuG];

    const match = (user, cpu) => {
        if (user == cpu) {
            result.style.color = 'grey'
            return "Nobody Wins!";
        }

        else if (user == "R" && cpu == "S") {
            result.style.color = 'green'
            return "You Win!";
        }

        else if (user == "R" && cpu == "P") {
            result.style.color = 'red'
            return "You Lose!";
        }

        else if (user == "S" && cpu == "R") {
            result.style.color = 'red'
            return "You Lose!";
        }

        else if (user == "S" && cpu == "P") {
            result.style.color = 'green'
            return "You Win!";
        }

        else if (user == "P" && cpu == "R") {
            result.style.color = 'green'
            return "You Win!";
        }

        else if (user == "P" && cpu == "S") {
            result.style.color = 'red'
            return "You Lose!";
        }

        else {
            output.style.color = 'grey'
            return "Invalid Input";
        }
    };

    match(user, cpu);
    if (user != "R" && user != "P" && user != "S") {
        output.innerHTML = "Invalid Input";
    }

    else {
        let res = match(user, cpu);
        output.innerHTML = `Computer:&nbsp;<u style="text-decoration-color: cyan;">${cpu}</u>&nbsp;&nbsp;|&nbsp; You:&nbsp;<u style="text-decoration-color: cyan;"> ${user} </u> `;

        result.innerHTML = res;
    }
});



