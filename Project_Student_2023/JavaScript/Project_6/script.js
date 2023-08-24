

/*Rotate through the following colors: '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', 
'#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', 
'#1976D2', '#1565C0', '#0D47A1'*/

// create function to get a random color from teh given array of colors

function getRandomColor() {
    const colors = [
        '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8',
        '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5',
        '#1976D2', '#1565C0', '#0D47A1'
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}

//create function to format time difits with leading zeros: using a conditional ternary operator to return one of two expressions based on th result 

function formatTimeDifits(value) {
    return value <10 ? '0' +value: value;
}

//create function to update the clock display and background color
function updateClock() {
    const now = new Date();
    const hours = formatTimeDifits(now.getHours());
    const minutes = formatTimeDifits(now.getMinutes());
    const second = formatTimeDifits(now.getSeconds());
    const timeDisplay = `${hours}:${minutes}:${second}`;
    const clockElement = document.getElementById('time');

//set randomcolor function

    clockElement.textContent = timeDisplay;
    document.body.style.backgroundColor = getRandomColor();
}

// set interval function to update the clock and background color every second
setInterval(updateClock,1000);

