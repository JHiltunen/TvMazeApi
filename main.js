const hakunappi = document.getElementById('hakunappi');
const hakuteksti = document.getElementById('hakuteksti');

console.log("Haku: " + hakuteksti);
    fetch('http://api.tvmaze.com/shows?page=1')             // Käynnistetään haku. Vakiometodi on GET.
    .then(function(vastaus){        // Sitten kun haku on valmis,
      return vastaus.json();        // muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi
    }).then(function(json){         // Sitten otetaan ladattu data vastaan ja
        tulostaAloitusSarjat(json);
      console.log(json);              // kutsutaan naytaKuva-funktiota ja lähetetään ladattu data siihen parametrinä.
    }).catch(function(error){       // Jos tapahtuu virhe,
      console.log(error);           // kirjoitetaan virhe konsoliin.
    });

hakunappi.addEventListener('click', function() {
    console.log("Haku: " + hakuteksti);
    fetch('http://api.tvmaze.com/search/shows?q=' + hakuteksti.value)             // Käynnistetään haku. Vakiometodi on GET.
    .then(function(vastaus){        // Sitten kun haku on valmis,
      return vastaus.json();        // muutetaan ladattu tekstimuotoinen JSON JavaScript-olioksi/taulukoksi
    }).then(function(json){         // Sitten otetaan ladattu data vastaan ja
      tulostaSarjat(json);
      console.log(json);              // kutsutaan naytaKuva-funktiota ja lähetetään ladattu data siihen parametrinä.
    }).catch(function(error){       // Jos tapahtuu virhe,
      console.log(error);           // kirjoitetaan virhe konsoliin.
    });
});

window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      hakunappi.click();
    }
});

function tulostaSarjat(json) {
    document.querySelectorAll('div.card').forEach(n => n.remove());
    for (var i = 0; i < json.length; i++) {

        let showName;
        let showImage;
        let showSummary;
       
        try {
            showName = json[i].show.name;
            showImage = json[i].show.image.medium;
            showSummary = json[i].show.summary;
        } catch (e) {
            if (typeof showImage == 'undefined') {
                showImage = 'https://via.placeholder.com/600x400.png?text=No%20image%20available';
            }

            if (typeof showSummary == 'undefined') {
                showSummary = 'No summary provided.';
            }

            console.log("Error with fetched data: " + e);
        } finally {

        }

        let card = document.createElement('div');
        card.className = 'card';
        let cardImageHolder = document.createElement('div');
        cardImageHolder.className = 'card-image';
        let cardImage = document.createElement('img');
        cardImage.src = showImage;
        cardImageHolder.appendChild(cardImage);

        let cardText = document.createElement('div');
        cardText.className = 'card-text';
        let date = document.createElement('span');
        date.className = 'date';
        let cardTitle = document.createElement('h2');
        cardTitle.innerHTML = showName;
        let cardSummary = document.createElement('p');
        cardSummary.innerHTML = showSummary;
        cardText.appendChild(date);
        cardText.appendChild(cardTitle);
        cardText.appendChild(cardSummary);

        card.appendChild(cardImageHolder);
        card.appendChild(cardText);

        document.getElementsByClassName('row')[0].appendChild(card);
    }
}

function tulostaAloitusSarjat(json) {
    document.querySelectorAll('div.card').forEach(n => n.remove());
    for (var i = 0; i < json.length; i++) {

        let showName;
        let showImage;
        let showSummary;
       
        try {
            showName = json[i].name;
            showImage = json[i].image.medium;
            showSummary = json[i].summary;
        } catch (e) {
            if (typeof showImage == 'undefined') {
                showImage = 'https://via.placeholder.com/600x400.png?text=No%20image%20available';
            }

            if (typeof showSummary == 'undefined') {
                showSummary = 'No summary provided.';
            }

            console.log("Error with fetched data: " + e);
        } finally {

        }

        let card = document.createElement('div');
        card.className = 'card';
        let cardImageHolder = document.createElement('div');
        cardImageHolder.className = 'card-image';
        let cardImage = document.createElement('img');
        cardImage.src = showImage;
        cardImageHolder.appendChild(cardImage);

        let cardText = document.createElement('div');
        cardText.className = 'card-text';
        let date = document.createElement('span');
        date.className = 'date';
        let cardTitle = document.createElement('h2');
        cardTitle.innerHTML = showName;
        let cardSummary = document.createElement('p');
        cardSummary.innerHTML = showSummary;
        cardText.appendChild(date);
        cardText.appendChild(cardTitle);
        cardText.appendChild(cardSummary);

        card.appendChild(cardImageHolder);
        card.appendChild(cardText);

        document.getElementsByClassName('row')[0].appendChild(card);
    }
}