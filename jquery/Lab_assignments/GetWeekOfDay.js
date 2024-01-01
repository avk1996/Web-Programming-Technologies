function findDay() {
    let dt = document.getElementById('dt').value;
    let mydt = new Date(dt);

    switch (mydt.getDay()) {
        case 1:
            alert("Mon")
            break;
        case 2:
            alert("Tue")
            break;
        case 3:
            alert("Wed")
            break;
        case 4:
            alert("Thur")
            break;
        case 5:
            alert("Fri")
            break;
        case 6:
            alert("Sat")
            break;
        case 7:
            alert("Sun")
            break;
        default:
            alert("you are way out of your league buddy!")
            break;
    }
}