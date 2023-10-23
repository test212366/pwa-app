export const create = (tag, classItem = '', text= '') => {
    const item = document.createElement(tag)
    item.classList.add(classItem)
    item.textContent = text
    return item
}
export const customAppendChild = (array, item) => {
    array.forEach(el => {
        item.appendChild(el)
    })
}
export const createSlide = (item, allGenres, allCount) => {
    return `<div class="movie CAll">
                            <div class="movie__img">
                                <img width="200px" height="300px" src="${item.posterUrlPreview}" alt="${item.nameRu}" class="movie__img" >
                                <div class="overlay">
                                    <div class="descR">
                                        <div class="movie__raiting">${item.rating}</div>
                                        <div class="year">${item.year}</div>
                                        <div class="country">${allGenres}</div>
                                        <div class="fulters">${allCount}</div>
                                        <div class="time">${item.filmLength +' часа'}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="movie__title">${item.nameRu}</div>
                            <div class="movie__trailer">Смотреть трейлер</div>
                        </div>`
}
export const endSlide = () => {
    return `<div class="movie CAll">
                            <div class="movie__img">
                                <div class="nSlide" width="200px" height="300px">
                                Посмотреть всё
                            </div>
                            </div>
                        </div>`
}