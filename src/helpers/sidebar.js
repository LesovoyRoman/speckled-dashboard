/**
 * Collapse | Expand for root elem
 * @param expanded
 */
export function collapseExpand(expanded) {
    let rootElem = document.getElementById('speckled-dashboard-root')

    expanded ?
        rootElem.style.marginLeft = '240px'
        :
        rootElem.style.marginLeft = '64px'
}