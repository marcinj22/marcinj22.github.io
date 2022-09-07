$(document).ready(function() { 

    let newDiv = $('<div id="dane-programisty"></div>');
    $('body').append(newDiv);
    console.log(newDiv);

    $('#get-data').click(function() {
        fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .then(response => response.json())
            .then((data) => {

                
                let fName = data.imie;
                let sName = data.nazwisko;
                let occupation = data.zawod;
                let company = data.firma;
                console.log(newDiv);

                $('#dane-programisty').append('<br> Imie: ' + fName + '<br> Nazwisko: ' + sName + '<br> Zawod: ' + occupation + '<br> Firma: ' + company);
                

            })

            .catch((error) => {
                console.log(error);
            })
    })
    
    
})
