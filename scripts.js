/* AZIC // SOVEREIGN LOGIC v7.2 */

function nav(page) {
    const viewport = document.getElementById('viewport');
    viewport.style.opacity = '0';

    setTimeout(() => {
        fetch(`${page}.html`)
            .then(res => {
                if (!res.ok) throw new Error('SIGNAL_FAILED');
                return res.text();
            })
            .then(html => {
                viewport.innerHTML = html;
                viewport.style.opacity = '1';
                window.scrollTo(0,0);
                trackInteraction();
            })
            .catch(err => {
                viewport.innerHTML = `<div class="asset-card"><h2>CONNECTION ERROR</h2><p>The page "${page}" is currently offline.</p></div>`;
                viewport.style.opacity = '1';
            });
    }, 200);
}

let sessionInteractions = 0;
function trackInteraction() {
    sessionInteractions++;
    if (sessionInteractions >= 20) {
        document.body.style.filter = "blur(15px)";
        alert("SECURITY PROTOCOL: SENSING HIGH ACTIVITY. PLEASE ENLIST TO CONTINUE.");
    }
}

window.onload = () => { nav('home'); };
