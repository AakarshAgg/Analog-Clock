setInterval(() => {
    d = new Date(); //use to get the date and time 
    //console.log(d)
    htime = d.getHours(); //use to get the hour
    //console.log(htime)
    mtime = d.getMinutes(); //use to get the hour
    //console.log(mtime)
    stime = d.getSeconds(); //use to get the seconds
    //console.log(stime)

    //hour hand rotate 360deg in 12 hours ,and 30deg in 1 hour and 1 hour or 60min gives 30deg rotation to hour hand,so one minute gives 60/30 =1/2 deg rotation to the hour hand so "m" minutes give m/2 deg rotation
    hrotation = 30 * htime + mtime / 2;
    //minute hand rotate 360deg in 60 minutes,and in 1 minute minute hand rotates 6deg
    mrotation = 6 * mtime;
    //second hand rotates 360 deg in 60 seconds ,and in 1 second it rotates 6deg
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);