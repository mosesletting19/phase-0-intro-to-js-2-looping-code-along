function writeCards(names, event) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
}



function countDown(startingNumber) {
    if (Number.isInteger(startingNumber) && startingNumber > 0) {
        while (startingNumber >= 0) {
            console.log(startingNumber);
            startingNumber--;
        }
    } else {
        console.log('Please provide a positive integer as input.');
    }
}