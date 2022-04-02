export const getElement = (el : HTMLElement | string): HTMLElement | null => {
    if(typeof el === 'string') {
        return document.querySelector(el)
    }
    return el
}