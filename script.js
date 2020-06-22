let endpoint = `https://api.github.com/users/Jackdaw93`;
let options = {
  method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
};

let image = document.querySelector("img");
let name = document.getElementById("name");
let loc = document.getElementById("location");
let foll = document.getElementById("following");
let follw = document.getElementById("followers");
let pub = document.getElementById("public");

async function getNameCountry() {
  try {
    let respoonse = await fetch(endpoint, options);
    let results = await respoonse.json();

    name.innerHTML = `${results.name}`;
    loc.innerHTML = `${results.location}`;
    foll.innerHTML = `${results.following}`;
    follw.innerHTML = `${results.followers}`;
    pub.innerHTML = `${results.public_repos}`;
    image.setAttribute("src", results.avatar_url);
  } catch (error) {
    console.log(error);
  }
}

getNameCountry();
