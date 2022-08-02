const button = document.getElementById("button")

button.addEventListener("click", tellTheWinner);

function tellTheWinner(){
    let team1Names = document.getElementById("team1names").value;
    let team2Names = document.getElementById("team2names").value;

    let team1Score = document.getElementById("team1score").value;
    let team2Score = document.getElementById("team2score").value;

    let output = document.getElementById("output");


    let team1 = team1Names.split(/[\s,]+/);
    if(team1[0]=="") team1.shift();

    let team2 = team2Names.split(/[\s,]+/);
    if(team2[0]=="") team2.shift();
    let score = parseInt(team1Score) + parseInt(team2Score);
    if(team1Score > 7 || team2Score > 7 ||  score > 7) {
        alert("Invalid score!");
        location.reload();
    }
    else if(team1.length > 11 || team2.length> 11 || team1[0] == "" || team2[0]=="")
    {
        alert("Invalid number of players!!!");
        location.reload();
    }
    if(team1Score>team2Score){
        output.innerHTML = "Team 1 won";
    }
    else if(team2Score>team1Score){

        output.innerHTML = "Team 2 won";
    }
    else{
        output.innerHTML = "Draw";

    }
    console.log("Team 1 players :")
    team1.forEach(function (value){
        console.log(value);
    })
    console.log("--------------------")
    console.log("Team 2 players :")
    team2.forEach(function (value){
        console.log(value);
    })
    console.log("--------------------")

    let result1 = print_all_sum(parseInt(team1Score));
    let result2 = print_all_sum(parseInt(team2Score));

    let s1="[";
    result1.forEach(function (a){
        s1 += a;
        s1+="],["
    })
    s1 = s1+ team1Score +"]";

    let s2="[";
    result2.forEach(function (a){
        s2 += a;
        s2+="],["
    })
    s2 = s2+ team2Score +"]";

    document.getElementById("subset1").style.visibility = "visible";
    document.getElementById("subset2").style.visibility = "visible";
    document.getElementById("subset1").innerHTML = s1;
    document.getElementById("subset2").innerHTML = s2;

 }
let print_all_sum_rec = function(target, current_sum, start, result, output) {
    if (current_sum === target) {
        output.push(result.slice());
    }

    for (let i = start; i < target; i++) {
        let temp_sum = current_sum + i;
        if (temp_sum <= target) {
            result.push(i);
            print_all_sum_rec(target, temp_sum, i, result, output);
            result.pop();
        } else {
            return;
        }
    }
};

let print_all_sum = function(target) {
    let output = [];
    let result = [];
    print_all_sum_rec(target, 0, 1, result, output);
    return output;
};