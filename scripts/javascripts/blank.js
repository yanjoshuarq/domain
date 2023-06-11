const url = 'https://www.adobe.com/br/products/flashplayer/end-of-life.html'
const BtNs872 = document.querySelector('#BtNs872')

function openInNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
}

BtNs872.addEventListener('click', () => {
    openInNewTab(url)
})