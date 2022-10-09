const postList = document.querySelector(".posts");

export const setUpPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((e) => {
      console.log(data);
      const post = e.data();
      const li = `
      <li class="list-group-item list-group-item-action">
      <h5>${post.title}</h5>
      <p>${post.content}</p>
      </li>
      `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = `<h1> Login to see posts </h1>`;
  }
};
