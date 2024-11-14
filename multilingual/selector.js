import _w from '../selector/selector'

/** Multilingual selector, works like _w
 * adds '-rtl' to the element tag if site language is written in RTL */
export default {
    image: tag => _w.image(tag + ext),
    vector: tag => _w.vector(tag + ext),
    html: tag => _w.html(tag + ext),
}