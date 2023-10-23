import {preparingDataAll, preparingDataFulters, responceAll} from "./blocks/fetch";
import {$overlay, $wrapper, showDescMovie} from "./blocks/showDescMovie";

async function prepare() {
    await preparingDataAll()
}prepare()



document.body.addEventListener('click', e => {
    let _ = e.target
    if(_.classList.contains('overlay') || _.classList.contains('descR') || _.classList.contains('overlay') || _.classList.contains('movie__raiting') || _.classList.contains('year') || _.classList.contains('country') || _.classList.contains('fulters') || _.classList.contains('times') ) {
        if (_.classList.contains('overlay')) {
            return showDescMovie(_.parentNode.parentNode.parentNode, responceAll.films)
        }
        return  showDescMovie(_.parentNode.parentNode.parentNode.parentNode, responceAll.films)
    }
    if(_.classList.contains('aside__overlay')) {
        $overlay.classList.remove('active')
        $wrapper.classList.remove('active')
    }
})