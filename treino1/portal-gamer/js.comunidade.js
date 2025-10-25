document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPost");
  const feed = document.getElementById("feed");

  // Carregar posts do localStorage
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  renderPosts();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const legenda = document.getElementById("legenda").value;
    const imagemInput = document.getElementById("imagem");
    const arquivo = imagemInput.files[0];

    if (!arquivo) return alert("Selecione uma imagem!");

    const reader = new FileReader();
    reader.onload = () => {
      const novoPost = {
        imagem: reader.result,
        legenda,
        curtidas: 0
      };

      posts.unshift(novoPost);
      localStorage.setItem("posts", JSON.stringify(posts));

      form.reset();
      renderPosts();
    };

    reader.readAsDataURL(arquivo);
  });

  function renderPosts() {
    feed.innerHTML = "";

    posts.forEach((post, index) => {
      const postEl = document.createElement("div");
      postEl.classList.add("post");

      postEl.innerHTML = `
        <img src="${post.imagem}" alt="Post">
        <p class="legenda">${post.legenda}</p>
        <div class="acoes">
          <span class="curtir" data-index="${index}">❤️ ${post.curtidas}</span>
        </div>
      `;

      feed.appendChild(postEl);
    });

    document.querySelectorAll(".curtir").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = btn.getAttribute("data-index");
        posts[index].curtidas++;
        localStorage.setItem("posts", JSON.stringify(posts));
        renderPosts();
      });
    });
  }
});
