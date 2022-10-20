const countDate = "21 Oct 2022 01:15 AM"
document.getElementById("count-date").innerHTML = countDate 
const inputs = document.querySelectorAll("input");

function countDown() {
    const last = new Date(countDate)
    const now = new Date()
    console.log(now)
    const different = (last - now)/1000
    console.log(different)
    if(different < 0 ) return;

    inputs[0].value = Math.floor(different / 3600 / 24)
    inputs[1].value = Math.floor(different / 3600 % 24)
    inputs[2].value = Math.floor(different / 60 % 60)
    inputs[3].value = Math.floor(different % 60)
    
    
}
countDown();

setInterval(() => {
    countDown()
}, 1000);