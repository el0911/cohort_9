function timer() {
    let now = new Date()
    console.log(now);

    now = now.toTimeString()
    console.log(now);

    now = now.split(' ')

    console.log(now);

    now = now[0]
    console.log(now);

    document.getElementById('time').innerText = now
}


setInterval( timer, 1000 )
