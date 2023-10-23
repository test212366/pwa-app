import {createAllElements} from "./createElements";
import {createSlide} from "./utils";

export let responceAll
export async function preparingDataAll(currentPage = 1) {
    const API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'
    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${currentPage}`
    const resp = await fetch(API_URL, {
        headers: {
            "X-Api-Key": API_KEY
        }
    })
    responceAll = await resp.json()
    createAllElements(responceAll)
}
export let allFulms = []
export async function preparingDataFulters(id) {
    const API_KEY = 'd4121654-de25-4589-9d26-0694e00a8ae8'
    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${id}&order=YEAR&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1888&yearTo=2020&page=1`
    const resp = await fetch(API_URL, {
        headers: {
            "X-Api-Key": API_KEY
        }
    })
    let responceFulters = await resp.json()
    allFulms.push(responceFulters)
    preparingDataCreate(allFulms)
}
export function preparingDataCreate(data) {
    console.log(data)
    data.forEach(item => {
        console.log(item)
        createAllElements(item, true)
    })
}