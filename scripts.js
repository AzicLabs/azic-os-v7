/* AZIC // SOVEREIGN LOGIC v7.7 */

function nav(page) {
    const viewport = document.getElementById('viewport');
    viewport.style.opacity = '0';
    setTimeout(() => {
        fetch(`${page}.html`)
            .then(res => res.text())
            .then(html => {
                viewport.innerHTML = html;
                viewport.style.opacity = '1';
                window.scrollTo(0,0);
            });
    }, 200);
}

function searchSystem() {
    let input = document.getElementById('siteSearch').value.toLowerCase();
    let cards = document.getElementsByClassName('asset-card');
    
    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(input) ? "block" : "none";
    }
}

window.onload = () => { nav('home'); };
