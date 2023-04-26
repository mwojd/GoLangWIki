document.addEventListener('DOMContentLoaded', function() {
    var clicks =0;
    document.getElementById("extendButton").addEventListener("click", () => {
        clicks++;
        document.querySelector(".wrapper").classList.toggle("extendWrapper");
        document.querySelector(".nav").classList.toggle("extendedNav");
        if(clicks>1) {
            document.querySelector(".wrapper").classList.toggle("reverse-extendWrapper");
            document.querySelector(".nav").classList.toggle("reverse-extendedNav");
        }

    })
    document.getElementById("historyButton").addEventListener("click", () => {

    })
    document.addEventListener("click", (e) => {
        console.log(e.target.id)
        if(e.target && e.target.id == "historyButton") {
            document.getElementById("content").innerHTML = '\
            <p>\
            Go to język programowania opracowany przez firmę Google i został po raz pierwszy zaprezentowany w 2009 roku przez Roberta Griesemera, Roba Pikea i Kena Thompsona. \
            </p>\
            <p>\
            Początkowo język Go został stworzony z myślą o adresowaniu problemów, z którymi borykały się zespoły programistów w firmie Google. Miało to na celu zastąpienie istniejących już języków programowania, takich jak C++ i Java, które okazały się niewystarczające dla potrzeb Google. \
            </p>\
            <p>\
            Go został zaprojektowany jako język programowania o wysokiej wydajności, prostocie, przejrzystości i skalowalności. W procesie projektowania twórcy języka zdecydowali się na połączenie najlepszych cech innych języków programowania, takich jak szybkość i efektywność C++, prostota Pythona i czytelność Rubyego.\
            </p>\
            <p>\
            Go zyskał szybko na popularności, szczególnie wśród programistów zajmujących się programowaniem sieciowym, przetwarzaniem danych i aplikacjami rozproszonymi.\
            </p>\
            <p>\
            Obecnie język Go jest dostępny na wielu platformach, w tym na systemach operacyjnych Windows, Linux, macOS i FreeBSD. Cieszy się również wsparciem licznych narzędzi i bibliotek, co czyni go atrakcyjnym wyborem dla programistów, którzy szukają wydajnego i łatwego w użyciu języka programowania.\
            </p>\
            ';
        } else if(e.target && e.target.id == "controversionsButton") {
            document.getElementById("content").innerHTML = '\
            <p>\
            Język Go nie jest pozbawiony kontrowersji. Oto niektóre z głównych kwestii, które są omawiane:\
            </p>\
            <p>\
            1. Zastąpienie języka C++: Istnieje kontrowersja dotycząca celu, jakim jest zastąpienie języka C++ językiem Go wewnątrz firmy Google. Niektórzy uważają to za nieuzasadnione i trudne do przekonania do zmiany istniejących systemów.\
            </p>\
            <p>\
            2. Brak wstecznej kompatybilności: Decyzja o braku wstecznej kompatybilności między wersjami Go budzi kontrowersje i wymaga wprowadzania zmian w istniejącym kodzie. To może stanowić wyzwanie dla programistów utrzymujących starsze aplikacje.\
            </p>\
            <p>\
            3. Brak pewnych funkcji: Niektórzy krytykują Go za brak niektórych zaawansowanych funkcji dostępnych w innych językach, takich jak dziedziczenie klas. Nieobecność tych funkcji może być uważana za ograniczenie.\
            </p>\
            <p>\
            4. Zarządzanie zależnościami: Sposób, w jaki Go zarządza zależnościami poprzez moduły, budzi kontrowersje. Niektórzy uważają, że ten sposób jest trudny do zrozumienia i mniej elastyczny niż tradycyjne systemy zarządzania zależnościami.\
            </p>\
            '
        } else if(e.target && e.target.id == "howTostart") {
            document.getElementById("content").innerHTML = '\
            <p>\
            rozpoczęcie pracy z językiem go jest bardzo łatwe i nie wymaga dużo czasu.\
            za to możemy dziękować naszemu ulubionemu wukowi google.\
            </p>\
            <p>\
            instalacja go jest bardzo prosta.\
            wystarczy wejść na stronę <a href="https://golang.org/dl/" target=_blank>golang.org/dl/</a> i pobrać odpowiednią wersję dla naszego systemu operacyjnego.\
            w przypadku windowsa jest to plik .msi, który po prostu instalujemy.\
            natomiast w przypadku linuxa jest to plik .pkg który instalujemy za pomocą komend\
            które można znaleźć w internecie.\
            </p>\
            <p>\
            po zainstalowaniu go polecane jest zainstalowanie edytora kodu.\
            w tym przypadku polecamy visual studio code.\
            w którym możemy zainstalować rozszerzenie go.\
            które nam podpowiada składnie i pomaga w pisaniu kodu.\
            </p>\
            <p>\
            po zainstalowaniu go i edytora kodu możemy zacząć pisać nasz pierwszy program.\
            </p>\
            '
        } else if(e.target && e.target.id == "basicsOfGo") {
            document.getElementById("content").innerHTML = '\
            <p>\
            Po stworzeniu pliku z rozszerzeniem .go możemy zacząć pisać nasz pierwszy program.\
            najpierw należy wpisać:</br>\
            package main\
            import "fmt"\
            func main() {\
            }\</br>\
            </p>\
            <p>\
            package main - oznacza, że nasz program będzie głównym programem.\
            import "fmt" - oznacza, że będziemy używać biblioteki fmt.\
            func main() - oznacza, że nasza funkcja main będzie główną funkcją.\
            </p>\
            <p>\
            teraz podam najbardziej podstawową składnie go.</br>\
            fmt.Println("Hello World!") - oznacza, że wypisujemy na ekranie Hello World! przy pomocy biblioteki fmt.</br>\
            const x = 5 - oznacza, że zmienna x jest stała i nie może być zmieniona.</br>\
            var x = 5 - oznacza, że zmienna x jest zmienną i może być zmieniona.</br>\
            for [warunek] { [kod] } - oznacza, że wykonujemy kod dopóki warunek jest prawdziwy.</br>\
            if [warunek] { [kod] } - oznacza, że wykonujemy kod jeśli warunek jest prawdziwy.</br>\
            while [warunek] { [kod] } - oznacza, że wykonujemy kod dopóki warunek jest prawdziwy.</br>\
            </p>\
            <p>\
            teraz przedstawię wam przykładowe operacje arytmetyczne przy użyciu zmiennej o nazwie a i zmiennej b.</br>\
            c := a + b - oznacza, że zmienna c jest sumą zmiennych a i b.</br>\
            c := a - b - oznacza, że zmienna c jest różnicą zmiennych a i b.</br>\
            c := a * b - oznacza, że zmienna c jest iloczynem zmiennych a i b.</br>\
            c := a / b - oznacza, że zmienna c jest ilorazem zmiennych a i b.</br>\
            c := a % b - oznacza, że zmienna c jest resztą z dzielenia zmiennych a i b.</br>\
            a==b - oznacza, że zmienna a jest równa zmiennej b.</br>\
            </p>\
            '
        }
    })
    
});