let questionIndex = null
function randInt(min,max) {
    min = Math.ceil(min)
    max=Math.floor(max)
    return Math.floor(Math.random()*(max-min+1)) + min
}
document.addEventListener("DOMContentLoaded", () => {
    var questions =
    [
        ["question1", false],
        ["question2", true],
        ["question3", true],
        ["question4", false],
    ]
    var generateButton = document.getElementById("generate")
    var content = document.getElementById("content")
    var answearedQuestions=[]

    function generateQuestion() {
        if(answearedQuestions.length == questions.length) {
            content.innerHTML = "Wszystkie pytania zostały już wylosowane"
            document.getElementById("generate").remove()
        }else{
            questionIndex=randInt(0,questions.length-1)
            while(answearedQuestions.includes(questionIndex)) {
                questionIndex=randInt(0,questions.length-1)
            }
            content.innerHTML = questions[questionIndex][0].concat('</br>\
            <button id="answearTrue">Prawda</button>\
            <button id="answearFalse">Fałsz</button>\
            ')
        }
    }
    generateButton.addEventListener("click", () => {
        generateQuestion();
    })
    document.addEventListener("click", (e) => {
        if(e.target && e.target.id == "answearTrue") {
            if(questions[questionIndex][1] == true) {
                answearedQuestions.push(questionIndex)
                alert("Dobrze")
            } else {
                alert("Źle")
            }
            generateQuestion();
        }
        if(e.target && e.target.id == "answearFalse") {
            if(questions[questionIndex][1] == false) {
                alert("Dobrze")
                answearedQuestions.push(questionIndex)
            } else {
                alert("Źle")
            }
            generateQuestion();
        }
    })
})