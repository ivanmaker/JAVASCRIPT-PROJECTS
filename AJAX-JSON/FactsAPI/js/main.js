/*jslint browser:true */
'use strict';

function loadCatFact() {
    let catFactGetter = new XMLHttpRequest();
    let catObj;
    catFactGetter.onload = function () {
        if (catFactGetter.status === 200) {
            catObj = JSON.parse(catFactGetter.responseText);
            console.log(catObj);
            document.getElementById('catFact').innerHTML = catObj.fact;
        } //end if
    }
    // GET THE CONDITIONS
    catFactGetter.open('GET', 'https://catfact.ninja/fact', true);
    catFactGetter.responseType = 'text';
    catFactGetter.send();

}; //end function

function loadScienceFact() {
    let scienceFactGetter = new XMLHttpRequest();
    let scienceObj;
    console.log("1 - " + scienceFactGetter.status);
    scienceFactGetter.onload = function () {
        if (scienceFactGetter.status === 200) {
            scienceObj = JSON.parse(scienceFactGetter.responseText);
            console.log(scienceObj);
            console.log("2 - " + scienceFactGetter.status);
            document.getElementById('scienceFact').innerHTML = scienceObj.text;
        } //end if
    }
    console.log("3 - " + scienceFactGetter.status);
    // GET THE CONDITIONS
    scienceFactGetter.open('GET', 'https://uselessfacts.jsph.pl//api/v2/facts/random?language=en', true);
    console.log("4 - " + scienceFactGetter.status);
    scienceFactGetter.responseType = 'text';
    scienceFactGetter.send();
}; //end function