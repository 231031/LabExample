function calculate() {
    let score = Number(document.getElementById("score").value);
    let grade;
    if (score>=80) {
      grade = "A ^__^";
    }

    else if (score >= 70) {
        grade = "B :)"
    }

    else if (score >= 60) {
        grade = "C :|"
    }

    else if (score >= 50) {
        grade = "D -__-"
    }

    else
    {
        grade = "F T__T"
    } 
    
    document.getElementById("result").innerHTML = "Your grade is " + grade;
  }