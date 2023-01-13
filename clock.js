function setDate(){
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    const secondDegrees = ((second / 60) * 360 + 90);
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minuteDegrees = ((minute / 60)*360 + 90);
    const minuteHand = document.querySelector('.minute-hand');
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hourDegrees = ((hour / 12)* 360 + 90);
    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = (`rotate(${hourDegrees}deg)`);
    const bgColor = document.querySelector('.wall');
    bgColor.style.backgroundColor = (`rgb(${second}, ${minute}, ${second})`);
    
    // console.log(second, minute ,second );
}
setInterval(setDate, '1000');
