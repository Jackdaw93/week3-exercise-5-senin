let endpoint = `https://api.github.com/users/Jackdaw93`;
let options = {
  method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
};

let name = document.getElementById("name");
let image = document.querySelector("img");
let userName = document.getElementById("username");

async function getNameCountry() {
  try {
    let respoonse = await fetch(endpoint, options);
    let results = await respoonse.json();
    console.log(results);
    console.log(results);
    name.innerHTML = `${results.name}`;
    image.setAttribute("src", results.avatar_url);
    userName.innerHTML = `User ID: ${results.login}`;
  } catch (error) {
    console.log(error);
  }
}

getNameCountry();
