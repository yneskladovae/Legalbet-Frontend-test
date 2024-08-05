document.addEventListener('DOMContentLoaded', () => {
    const article = document.querySelector('.card__info-article');
    const arrowBlock = document.querySelector('.card__info-article__arrow-block');
    const arrow = document.querySelector('.card__info-article__arrow');

    arrowBlock.addEventListener('click', () => {
        if (article.classList.contains('expanded')) {
            article.style.maxHeight = '6em';
        } else {
            article.style.maxHeight = `${article.scrollHeight}px`;
        }
        article.classList.toggle('expanded');
        arrow.classList.toggle('rotated');
    });
});
