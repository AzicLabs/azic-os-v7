/* AZIC // SOVEREIGN LOGIC ENGINE v7.0 */

// 1. NAVIGATION SYSTEM (The Router)
function nav(page) {
    const viewport = document.getElementById('viewport');
    
    // Start fade out
    viewport.style.opacity = '0';
    viewport.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        fetch(`${page}.html`)
            .then(response => {
                if (!response.ok) throw new Error('SIGNAL_FAILED');
                return response.text();
            })
            .then(html => {
                viewport.innerHTML = html;
                viewport.style.opacity = '1';
                // Trigger security check on every successful navigation
                trackInteraction();
            })
            .catch(err => {
                viewport.innerHTML = `<div style="color:red; font-family:monospace; padding:20px;">>> ERROR: ${err.message} << <br> Ensure ${page}.html is created.</div>`;
                viewport.style.opacity = '1';
            });
    }, 300);
}

// 2. SECURITY GATE (The Bandwidth Limit)
let interactionCount = 0;

function trackInteraction() {
    interactionCount++;
    console.log(`[SYS] Interaction Count: ${interactionCount}/5`);
    
    if (interactionCount >= 10) { // Set to 10 for testing, change to 5 for final "Jeff" demo
        document.body.style.filter = "blur(15px)";
        document.body.style.pointerEvents = "none";
        alert("CRITICAL: BANDWIDTH_LIMIT_REACHED. ENLIST_TO_RESTORE_FREQUENCY.");
    }
}

// 3. BOOT SEQUENCE
window.onload = () => {
    console.log("[SYS] NAVAANDER_OS_BOOT_COMPLETE");
    // Start by loading the mission page automatically
    nav('mission');
};
