let url = "https://5ef168ca1faf160016b4d5b5.mockapi.io/api/movies";
let addButton = document.getElementById("button");
let list = document.querySelector(".list");

// ------------- FUNCTION ----------------

createDiv = (attName, valueAtt) => {
  let div = document.createElement("div");
  div.setAttribute(attName, valueAtt);
  return div;
};

async function addMovie() {
  try {
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;
    let year = document.getElementById("year").value;
    let image = document.getElementById("image").value;
    let desc = document.getElementById("desc").value;

    let movieData = {
      title,
      genre,
      year,
      image,
      desc,
    };

    // POST, GET
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    };

    // ini bisa ga di dalem var post?
    let post = await fetch(url, options);

    displayList();
  } catch (error) {
    console.error(error);
  }
}

async function displayList() {
  try {
    list.innerHTML = null;
    let get = await fetch(url);
    let getList = await get.json();

    console.log(getList);
    getList.forEach((element) => {
      console.log(element);

      let divCard = createDiv("class", "card");
      let image = document.createElement("img");
      image.setAttribute("class", "card-img-top");
      image.setAttribute("src", `${element.image}`);
      image.setAttribute("alt", `${element.title}`);
      divCard.appendChild(image);
      let divBody = createDiv("class", "card-body");
      let title = document.createElement("h5");
      title.setAttribute("class", "card-title");
      title.innerHTML = element.title;
      let desc = document.createElement("p");
      desc.setAttribute("class", "card-text");
      desc.innerHTML = element.desc;
      divBody.appendChild(title);
      divBody.appendChild(desc);
      divCard.appendChild(divBody);
      list.appendChild(divCard);
    });
  } catch (error) {
    console.error(error);
  }
}
// ------------- EVENT LISTENER ----------------
addButton.addEventListener("click", addMovie);

// ------------- MAIN PAGE ----------------
displayList();
// let get = await fetch(url);
// let list = await get.json();

// console.log(list);
// // console.log(list[0].title);
// displayList(list);
