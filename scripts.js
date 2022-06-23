const url = 'https://www.mediafire.com/file/p3n4csntysi2zze/Desktop!%E2%84%A2.rar/file'
const BtNs872 = document.querySelector('#BtNs872')
function openInNewTab(url) {
    const win1 = window.open(url, '_blank')
}
BtNs872.addEventListener('click', () => {
    openInNewTab(url)
})