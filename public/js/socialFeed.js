function getData(url) {
  return fetch("URL")
    .then((res) => res.json())
    .catch((err) => console.log("handle this error:", err));
}

function renderDate(dateString) {
  const date = new Date(dateString);
  const locale = "en-us";
  const month = date.toLocaleString(locale, { month: "short" });
  const day = date.getDate();
  return `${month} ${day}`;
}

function createTemplate(cardData) {
  const card = document.createElement("article");
  card.className = "neat";
  card.innerHTML = `
    <div class="neat__avatar" style="background-image: url(${cardData.user.avatar
    });">
    </div>
    <div>
      <header class="neat__header">
        <span class="neat__username">@${cardData.user.username}</span>
        <span>&#183;</span>
        <span>${renderDate(cardData.created_at)}</span>
      </header>
      <div class="neat__body">${cardData.text}</div>
      <footer class="neat__footer">
        Likes: ${cardData.likes}
      </footer> 
    </div>
  `;
  return card;
}

function render(container, templates) {
  const d = document.createDocumentFragment();
  templates.forEach((template) => d.appendChild(template));
  container.appendChild(d);
}

function init() {
  const container = document.getElementById("social-feed");
  getData()
    // take the data as an argument
    .then((json) => json.feed.map(createTemplate))
    // return a DOM element with the data structured
    .then((templates) => render(container, templates));
}

init();
