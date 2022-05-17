// JavaScript Document


const myFunction = () => {
    let elem = document.getElementById('chooseMe');
    let dateShort = elem.options[elem.selectedIndex].text;
    let dayName;
    console.log(dateShort);

    switch(Number(dateShort)) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName= "Out of Range";
    }

    document.getElementById('feedback').innerHTML = dayName;
}

const anotherFunc = () => {
    let elem = document.getElementById('fortunes');
    let fortuneNum = elem.options[elem.selectedIndex].value;
    let fortuneMessage;
    switch (Number(fortuneNum)) {
        case 1:
        case 6:
            fortuneMessage = "You will inherit a fortune.";
            break;
        case 2:
        case 7:
            fortuneMessage = "You will become a JavaScript Ninja";
            break;
        case 3:
            fortuneMessage = "You will win a new car.";
            break;
        case 4:
        case 8:
            fortuneMessage = "A new computer will arrive at your house today.";
            break;

        default:
            fortuneMessage= "You have three hours to live so finish this course.";
    }
    document.getElementById('feedback').innerHTML = fortuneMessage;
}
