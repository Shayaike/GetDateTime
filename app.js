window.onload = function() {
    main();
}

function main() {
    let date = new Date()
    let hours = date.getHours()
    let year = date.getFullYear()
    let mon = date.getMonth()
    let day = date.getDate()
    let today = date.getDay()
    let timeZome = Intl.DateTimeFormat().resolvedOptions().timeZone
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    if (hours > 12) {
        hours = hours - 12
    }
    if (hours < 10) {
        hours = "0" + hours
    }
    let min = date.getMinutes()
    if (min < 10) {
        min = "0" + min
    }
    let sec = date.getSeconds()
    if (sec < 10) {
        sec = "0" + sec
    }
    let amPm = date.getHours()
    if (amPm > 12) {
        amPm = 'PM'
    }
    if (amPm < 12) {
        amPm = 'AM'
    }
    document.getElementById('time').addEventListener('click', function() {
        document.getElementById('hour').innerText = hours + " " + amPm
        document.getElementById('minutes').innerText = min
        document.getElementById('seconds').innerText = sec
        document.getElementById('timeZone').innerText = timeZome
    })
    document.getElementById('date').addEventListener('click', function() {
        document.getElementById('Day').innerText = weekday[today]
        document.getElementById('Date').innerText = day
        document.getElementById('Month').innerText = month[mon]
        document.getElementById('Year').innerText = year
    })
    document.getElementById('reset').addEventListener('click', function() {
        document.getElementById('hour').innerText = ""
        document.getElementById('minutes').innerText = ""
        document.getElementById('seconds').innerText = ""
        document.getElementById('timeZone').innerText = ""
        document.getElementById('Day').innerText = ""
        document.getElementById('Date').innerText = ""
        document.getElementById('Month').innerText = ""
        document.getElementById('Year').innerText = ""
    })


}