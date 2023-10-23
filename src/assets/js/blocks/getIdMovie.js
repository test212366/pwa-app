import {create, customAppendChild} from "./utils";

let responceYouTube
const $content = document.querySelector('.content')
export const getIdMovie = async id => {
    const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/',
        API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'
    const resp = await fetch(API_URL + id, {
        headers: {
            "X-Api-Key": API_KEY
        }
    })
    const responceID = await resp.json()
    await getYouTube(id)
    updateInformation(responceID.data, responceYouTube.trailers[0].url)

}
const updateInformation = (data, youTube) => {
    let allC = '', allFacts = '', allFulters = '', trailer, img
    if(youTube.includes('https://www.youtube.com/watch?v=')) {
        youTube = youTube.replace('https://www.youtube.com/watch?v=', '')
    }

    data.facts.forEach(i => {
        allFacts += i
    })
    data.genres.forEach(i => {
        allFulters += i.genre + ', '
    })
    data.countries.forEach(i => {
        allC += i.country + ', '
    })

    $content.scrollTo(0, 0)
    customAppendChild([create('div', 'aside__movie-title', `${data.nameRu}`), create('div', 'aside__movie-titleEn', `${data.nameEn}`), create('div', 'aside__desc', `${allC}, ${data.distributorRelease}, ${data.distributors}, ${data.year},  ${data.filmLength}` + ' Часа'),
    create('div', 'fulters', `Жанр:  ${allFulters}`), create('div', 'slogan', `Слоган фильма: ${data.slogan}`), create('div', 'premer',  `Премьера: ${data.premiereBluRay}`),img = create('img', 'poster'),
    trailer = create('div', 'aside__trailer'), create('div', 'aside__raiting', `${data.ratingAgeLimits}+`), create('div', 'aside__description-movie', `${data.description}`), create('div', 'facts', `${ 'Факты: ' + allFacts}`)
    ], $content)
    trailer.innerHTML = `<iframe width="560" height="315" class="video__trailer_youtube" src=https://www.youtube.com/embed/${youTube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    img.src = data.posterUrlPreview
}
async function getYouTube(id) {
    $content.innerHTML = ''
    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/videos`,
        API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'
    const resp = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "X-Api-Key": API_KEY
        }
    })
    responceYouTube = await resp.json()
}//TODO:Сделать несколько других блоков с фильмами. Сделать отображение инфы без багов