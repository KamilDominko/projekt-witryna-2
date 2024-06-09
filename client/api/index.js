export async function getExperts() {
  const res = await fetch('http://localhost:3000/experts');
  const experts = await res.json();

  const expertsHtml = experts.map((expert, index) => `
    <div class="team__item team__item--${index + 1}">
      <img class="team__item-img" src="${expert.avatar}" alt="expert avatar${index + 1}">
      <p class="team__item-text team__item-text--${index === 1 ? 'left' : 'right'}">
        ${expert.proposal}
      </p>
    </div>
  `).join('');

  const teamBoxHtml = `
    <div class="team__box">
      <h3 class="team__title title">
        Need a super hero?
      </h3>
      <p class="team__text">
        Do you require some help for your project: Conception workshop,
        prototyping, marketing strategy, landing page, Ux/UI?
      </p>
      <button class="team__btn">
        Contact our expert
      </button>
    </div>
  `

  const teamContainerNode = document.querySelector('.team__inner');
  teamContainerNode.innerHTML = expertsHtml + teamBoxHtml;
}

export async function getArticles() {
  const res = await fetch('http://localhost:3000/articles');
  const articles = await res.json();

  const html = articles.map((article, index) => `
    <div class="slider__item">
      <img class="slider__item-img" src="${article.poster}" alt="blog image ${index + 1}">
      <div class="slider__item-info">
        By <a class="slider__item-author" href="#">${article.author}</a> |  ${article.created_at}
      </div>
      <a href="#" class="slider__item-title title">
        ${article.title}
      </a>
    </div>
  `).join('');

  const articlesContainerNode = document.querySelector('.slider');
  articlesContainerNode.innerHTML = html;
}