
//This is function is for getting a pin
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

//This function for showing the pin

function generatePin() {
    document.getElementById('show-pin').value = getPin();
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    console.log(event.target);
});