
export function createSwiperRecomend(swip, bPrev, bNext) {
    const swiper = new Swiper('.'+swip, {
        navigation: {
            nextEl: '.' + bNext,
            prevEl: '.' + bPrev,
        },
        slidesPerView: 6,
        spaceBetween: 40,
        autoHeight: true
    })
}
