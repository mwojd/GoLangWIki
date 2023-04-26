let questionIndex = null
function randInt(min,max) {
    min = Math.ceil(min)
    max=Math.floor(max)
    return Math.floor(Math.random()*(max-min+1)) + min
}
document.addEventListener("DOMContentLoaded", () => {
    var questions =
    [
        ["jaki jest operator porównania w go", true, "A: ==</br>B:="],
        ["które jest poprawne", false, "A: if(warrunek) {}</br>B: if warunek {}"],
        ["z jakiej firmy wywodzi się go", true, "A: google</br>B: microsoft"],
        ["Czy język Go miał zastąpić C++", true, "A: Tak</br>B: Nie"],
        ["Czy język Go miał zastąpić js", false, "A: Tak</br>B: Nie"],
        ["Czym charakteryzuje się język Go?", false, "A:Kompatybilnością wsteczną</br>B:Prostotą"]
        ["Jak deklarujemy zmienną w Go?", false, "A:int x</br>B:var x int"],
        ["Jaki pakiet jest używany do obsługi wejścia/wyjścia w Go?", true, "A:fmt</br>B:io"],
        ["Jaką funkcję używamy do pobierania długości tablicy w Go?", false, "A:count</br>B:len"],
        ["Jakie jest słowo kluczowe używane do deklaracji funkcji w Go?", false, "A: func</br>B: def"],
        ["Jakie jest słowo kluczowe używane do zadeklarowania struktury w Go?", true, "A: struct</br>B: class"],
        ["Czy Go obsługuje dziedziczenie klas?", false, "A: Tak</br>B: Nie"],
        ["Czy Go obsługuje automatyczne zarządzanie pamięcią przez garbage collector?", true, "A: Tak</br>B: Nie"],
        ["Jaki jest typ danych używany do przechowywania wartości logicznych (prawda/fałsz) w Go?", true, "A: bool</br>B: boolean"],
        ["Jakie jest słowo kluczowe używane do zakończenia funkcji w Go?", false, "A: end</br>B: return"],
        ["Jakie jest słowo kluczowe używane do zakończenia pętli w Go?", true, "A: break</br>B: end"],
        ["Jakie jest słowo kluczowe używane do zakończenia instrukcji warunkowej w Go?", true, "A: break</br>B: end"],
        ["Czy Go obsługuje wielowątkowość (concurrency)?", true, "A: Tak</br>B: Nie"],
        ["Jakie jest słowo kluczowe używane do deklaracji stałych w Go?", true, "A: const</br>B: final"]
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
            content.innerHTML = questions[questionIndex][0].concat('</br>'.concat(questions[questionIndex][2].concat('</br>\
            <button id="answearTrue">A</button>\
            <button id="answearFalse">B</button>\
            ')))
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