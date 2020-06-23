let addButton = document.getElementById("button");
addButton.addEventListener("click", addMovie);

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

    // POST
    let url = "https://5ef168ca1faf160016b4d5b5.mockapi.io/api/movies";
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(movieData),
    };

    let response = await fetch(url, options);
    // let data = await response.json();
  } catch (error) {
    console.error(error);
  }
}
