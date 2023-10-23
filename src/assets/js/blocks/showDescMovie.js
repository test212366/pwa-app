import {getIdMovie} from "./getIdMovie";

export const $overlay = document.querySelector('.aside__overlay'),
    $wrapper = document.querySelector('.aside__wrapper')
export const showDescMovie = (item, data) => {
    const $title = item.querySelector('.movie__title')
    data.forEach(el => {
        if(el.nameRu === $title.textContent) {
            getIdMovie(el.filmId)
            $overlay.classList.add('active')
            $wrapper.classList.add('active')

        }
    })
}