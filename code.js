async function getUser() {
  var data = fetch("https://61f78cfc39431d0017eaf8bd.mockapi.io/bookstore", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return data;
}

async function getsingleAuthor(author) {
  let id = Number(author);
  var data = fetch(
    `https://61f78cfc39431d0017eaf8bd.mockapi.io/bookstore?rating=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  return data;
}

async function display_author() {
  const d = document.querySelector(".sidebar-body");
  d.innerHTML = "Loading...";
  let users = await getUser();
  const newValue = [
    ...new Map(users.map((item) => [item.author, item])).values(),
  ];
  d.innerHTML = "";
  newValue.forEach((dt) => {
    console.log(dt.author);
    d.innerHTML += `
    <a href="javascript:getAuthor(${dt.rating});">${dt.author}</a>
    `;
  });
  console.log(newValue);
}
async function getAuthor(author) {
  console.log(`hahahah`);
  const a = document.querySelector(".content-body");

  a.innerHTML = `<div class="loader"></div>`;
  let users = await getsingleAuthor(author);
  console.log(users);
  a.innerHTML = "";
  users.forEach((dt) => {
    a.innerHTML += `
    <div class="card mb-3" style="max-width: 500px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${dt.img}"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${dt.title}</h5>
          <p class="text-muted">by ${dt.author}</p>
          <div class="rating">
          <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
          <p class="text-muted">${dt.view} viewers</p>
      </div>
          <p class="card-text">
            ${dt.description}
          </p>
         
        </div>
      </div>
    </div>
  </div>
  </div>
    `;
  });
}
async function defaultdisplay() {
  const d = document.querySelector(".content-body");
  d.innerHTML = `<div class="loader"></div>`;
  let users = await getUser();
  d.innerHTML = "";
  users.forEach((dt) => {
    d.innerHTML += `
    <div class="card mb-3" style="max-width: 500px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="${dt.img}"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${dt.title}</h5>
          <p class="text-muted">by ${dt.author}</p>
          <div class="rating">
          <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
          <p class="text-muted">${dt.view} viewers</p>
      </div>
          <p class="card-text">
            ${dt.description}
          </p>
         
        </div>
      </div>
    </div>
  </div>
  </div>
    `;
  });
}

display_author();
defaultdisplay();
