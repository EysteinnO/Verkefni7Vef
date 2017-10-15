/*1. Það eru til þrjár leiðir að binda event við element, hver þeirra leiða er best og af hverju?
    Komdu með kóðasýnidæmi. (0.5%)
2. Hvað er callback? Útskýrðu með eigin orðum, komdu með kóðadæmi. (0.5%)
3. Hvað er EventLoop? Úrskýrðu með eigin orðum. (0.5%)
4. Leiðréttu eftirfarandi kóða þannig að hann virki (ekki syntax villa). (1%)
function checkUsername() {
    var target = e.target;
}
var el = document.getElementById('username');
el.addEventlistener('blur', checkUsername, false);
5. Event flow, Hvað þýðir false í Event Listener? (0.5%)
    elUsername.addEventListener('blur' , function() {
        checkUsername(5);
    }, false)
6. Hvað gera eftirfarandi aðferðir? Komdu með dæmi um notkun (1%)
a. stopPropagation()
b. preventDefault()
*/

/*Event listener for quiz*/
