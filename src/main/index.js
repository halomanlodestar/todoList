// Link Activity

let Registered = true;
let LoggedIn = false;

document.getElementById(`switch`).onclick = () => {
    if (Registered == true) {
        Registered = false;
        document.getElementById(`switch`).innerText = `SignUp`;
        console.log(`is Registered : ${Registered}`);
    }
    else if (Registered == false) {
        Registered = true;
        document.getElementById(`switch`).innerText = `Login`
        console.log(`is Registered : ${Registered}`);
    }
};

if (LoggedIn) {
    document.getElementById(`LoginMenu`).style.visibility = `hidden`;
}
else {
    document.getElementById(`LoginMenu`).style.visibility = ``;
}