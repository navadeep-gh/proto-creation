// 1. App State & Cart Data Tracking Pipeline
let cartItemsCount = 0;

function updateCartCounter(amount) {
    cartItemsCount += amount;
    document.getElementById('cart-counter').innerText = `${cartItemsCount} Items`;
    
    // Auto log event back to user loop
    logSystemEvent(`Asset state added to interface. Global cart index initialized to [${cartItemsCount}].`);
}

// 2. Client Side State Switching Router
function navigate(viewId) {
    document.querySelectorAll('.view-state').forEach(view => view.classList.remove('active'));
    
    // Remote event check safely captures click objects
    if (window.event && window.event.currentTarget) {
        document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
        window.event.currentTarget.classList.add('active');
    }
    
    document.getElementById(viewId).classList.add('active');

    if(viewId === 'analytics') { initCanvasEngine(); }
}

// 3. Instant Dynamic Query Component Filtering
function filterStorefront() {
    const query = document.getElementById('uiSearch').value.toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
        const text = card.getAttribute('data-title').toLowerCase();
        card.style.display = text.includes(query) ? "flex" : "none";
    });
}

// 4. HTML5 Vector Canvas Micro-interaction Module
const canvas = document.getElementById('prototypeCanvas');
let ctx = null;

function initCanvasEngine() {
    const localCanvas = document.getElementById('prototypeCanvas');
    if (!localCanvas) return;
    ctx = localCanvas.getContext('2d');
    
    // Draw baseline placeholder charts
    ctx.clearRect(0, 0, localCanvas.width, localCanvas.height);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 300); ctx.lineTo(650, 300);
    ctx.moveTo(50, 50);  ctx.lineTo(50, 300);
    ctx.stroke();

    // Mock analytics visual stream mapping
    ctx.fillStyle = '#4f46e5';
    ctx.font = '14px sans-serif';
    ctx.fillText("Interactive Plot Stream (Click canvas to map telemetry vectors)", 70, 40);
}

// Attach event tracking listener systematically to canvas
document.addEventListener('DOMContentLoaded', () => {
    const localCanvas = document.getElementById('prototypeCanvas');
    if(localCanvas) {
        localCanvas.addEventListener('click', function(e) {
            if(!ctx) ctx = localCanvas.getContext('2d');
            const rect = localCanvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            ctx.fillStyle = '#06b6d4';
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#10b981';
            ctx.strokeText(`Vector: [${Math.round(x)}, ${Math.round(y)}]`, x + 12, y + 4);
            logSystemEvent(`Canvas Matrix Click Register At: X [${Math.round(x)}] | Y [${Math.round(y)}]`);
        });
    }
});

// 5. Dynamic Data Injection Processing Engine
function processFeedbackEntry() {
    const textElement = document.getElementById('feedbackText');
    if(textElement.value.trim() === "") return;
    
    logSystemEvent(`<b>[User Evaluation Input]:</b> ${textElement.value}`);
    textElement.value = "";
}

function logSystemEvent(msg) {
    const logContainer = document.getElementById('feedbackContainer');
    if(!logContainer) return;
    const newLog = document.createElement('div');
    newLog.className = 'log-item';
    newLog.innerHTML = msg;
    logContainer.prepend(newLog);
}
