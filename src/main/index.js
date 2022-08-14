// Link Activity

let Registered = true;
let LoggedIn = false;

document.getElementById(`switch`).onclick = () => {
    if (Registered == true) {
        Registered = false;
        console.log(`is Registered : ${Registered}`);
    }
    else if (Registered == false) {
        Registered = true;
        console.log(`is Registered : ${Registered}`);
    }
};

if (LoggedIn) {
    document.getElementById(`LoginMenu`).style.visibility = `hidden`;
}
else {
    document.getElementById(`LoginMenu`).style.visibility = ``;
}