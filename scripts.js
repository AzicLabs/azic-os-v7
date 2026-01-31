/* AZIC // SOVEREIGN LOGIC ENGINE v7.1 */

function nav(page) {
    const viewport = document.getElementById('viewport');
    
    // Fade out effect
    viewport.style.opacity = '0';
    viewport.style.transform = 'translateY(10px)';
    viewport.style.transition = 'all 0.3s ease';

    setTimeout(() => {
        fetch(`${page}.html`)
            .then(res => {
                if (!res.ok) throw new Error('SIGNAL_FAILED');
                return res.text();
            })
            .then(html => {
                viewport.innerHTML = html;
                viewport.style.opacity = '1';
                viewport.style.transform = 'translateY(0)';
                window.scrollTo(0,0);
                trackInteraction();
            })
            .catch(err => {
                viewport.innerHTML = `<div class="asset-card" style="padding:40px; text-align:center;">
                    <h2 style="color:var(--az-med)">>> CONNECTION_ERROR <<</h2>
                    <p>Frequency for <strong>${page}.html</strong> not found. Build the file to restore signal.</p>
                </div>`;
                viewport.style.opacity = '1';
            });
    }, 300);
}

let clicks = 0;
function trackInteraction() {
    clicks++;
    if (clicks >= 15) { // Set to 15 for your testing, lower to 5 for Jeff
        document.body.style.filter = "blur(20px)";
        document.body.style.pointerEvents = "none";
        alert("CRITICAL: BANDWIDTH_EXCEEDED. ENLIST TO RESTORE.");
    }
}

window.onload = () => {
    console.log("[SYS] NAVAANDER_BOOT_v7.1_SUCCESS");
    nav('home'); // Set default landing to Home
};
