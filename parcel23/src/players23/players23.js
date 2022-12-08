import { AddPlayerClient } from '../../../parcel24';

// console.log('big benz, maestero modric');
document.getElementById('addPlayer01').addEventListener('click', addPlayer01Fn, false);


var addPlayerClient = new AddPlayerClient();

function addPlayer01Fn() {

    addPlayerClient.doStuff();    
    // addPlayerClient.addPlayerRequest();

    var payload = { name: 'Benzema', club: 'Real Madrid' };
    var returnValue = addPlayerClient.addPlayerRequest();
    console.log(returnValue);
    window.location = returnValue;
}