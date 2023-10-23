import {create, createSlide, customAppendChild, endSlide} from "./utils";
import {createSwiperRecomend} from "../swiper";

export async function createAllElements(dataRec, allFulms = false) {
    if(allFulms) {
        const chose = false
        createSlider(dataRec.films, chose,'fultersSwiper', 'fulters text', 'vest', false, 'filter', 'next1', 'prev1')
    } else {
        const chose = true
        createSlider(dataRec.films, chose, 'recomend', 'Рекомендуем вам посмотреть', 'Лучшие фильмы', true, 'recomend', 'next', 'prev')
    }
}
function createSlider(data, chose, classItem, TitleItem, smallItem, dropDown = false, swip, buttonNext, buttonPrev) {
    const $movies = document.querySelector('.movies')
    let swiper, prev,next, wrap,slide
    //create wrapperSlider
    const recomend = create('div', `${classItem}`); customAppendChild([ create('h4','titleSlider',`${TitleItem}`), create('small', 'm', `${smallItem}`),swiper = create('div', 'swiper-container'), prev = create('div', 'swiper-button-prev'), next = create('div', 'swiper-button-next')], recomend)
    customAppendChild([wrap = create('div', 'swiper-wrapper')], swiper)
    swiper.classList.add(swip), prev.classList.add(buttonPrev), next.classList.add(buttonNext),wrap.classList.add('swiper__wrap')
    data.forEach(item => {
        let allCount = '',allGenres = ''
        item.genres.forEach(_ => allGenres += _.genre + ', ')
        item.countries.forEach(_ => allCount +=  _.country + ', ')
        slide = create('div', 'swiper-slide')
        slide.classList.add('slide')
        slide.insertAdjacentHTML('afterbegin', createSlide(item, allGenres, allCount))
            if(chose) {
                let item = create('div', 'chose-NZ', 'Выбор PWA-NZ')
                slide.querySelector('.movie__img').appendChild(item)
            }
            wrap.appendChild(slide)
    })
    let last = create('div', 'swiper-slide')
    last.innerHTML = endSlide()
    wrap.appendChild(last)
    if(dropDown) {
        customAppendChild([create('h4', 'titleDrop', 'PWA-NZ: бесплатная платформа позволяющая просматривать фильмы сразу с трейлерами '), create('small', 'm-drop', 'Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то PWA-NZ – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей. Каждый день, по мере выхода новинок, список фильмов обновляется*')], recomend)
    }
    $movies.appendChild(recomend)
    createSwiperRecomend(swip, buttonPrev, buttonNext)
}
