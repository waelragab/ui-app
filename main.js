let questions = document.querySelectorAll('.q');
let answers = document.querySelectorAll('.a');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', (e) => {

        if (answers[i].style.display != "none") {
            answers[i].style.display = "none"
        } else {
            for (let i = 0; i < answers.length; i++) {
                answers[i].style.display = "none"
            }
            answers[i].style.display = "inline-block"
        }

    })
}



