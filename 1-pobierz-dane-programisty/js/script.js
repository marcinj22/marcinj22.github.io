$(document).ready(function() { 

    $('#get-data').click(function() {
        fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .then(response => response.json())
            .then((data) => {

                
                let fName = $('<div id="dane-programisty"></div>').text(`imie:  ${data.imie}`);
                let sName = $('<div id="dane-programisty"></div>').text(`nazwisko:  ${data.nazwisko}`);
                let occupation = $('<div id="dane-programisty"></div>').text(`zawod:  ${data.zawod}`);
                let company = $('<div id="dane-programisty"></div>').text(`firma:  ${data.firma}`);


                $('body').append(fName);
                $('body').append(sName);
                $('body').append(occupation);
                $('body').append(company);
                

            })

            .catch((error) => {
                console.log(error);
            })
    })
    
    
})
