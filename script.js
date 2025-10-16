async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    console.log(user);
    displayUser(user);
}

function displayUser(user) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const location = document.getElementById('location');
    const gender = document.getElementById('gender');
    const image = document.getElementById('image');

    name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
    gender.innerText = `${user.gender}`;
    email.innerText = `${user.email}`;
    phone.innerText = `${user.phone}`;
    location.innerText = `${user.location.city}, ${user.location.country}`;
    image.src = user.picture.large;
}

getRandomUser();