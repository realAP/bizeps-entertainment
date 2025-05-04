const app = document.getElementById('app');

function createMessage(text, className = 'message') {
    const msg = document.createElement('div');
    msg.className = className;
    msg.innerText = text;
    app.appendChild(msg);
    requestAnimationFrame(() => msg.classList.add('visible'));
    return msg;
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bootSequence() {
    const sleepTime = 1000;

    // Step 1: Show '$' symbol
    const init = createMessage('init system',"message");
    await wait(sleepTime);
    init.innerText = 'init system .';
    await wait(sleepTime);
    init.innerText = 'init system ..';
    await wait(sleepTime);
    init.innerText = 'init system ...';

    // Step 2: Init message
    await wait(sleepTime);
    init.innerText += ' OK!';

    // Step 3: Core process messages (text + result)
    const steps = [
        // 🧠 Mental Preparation
        { text: "Initializing mental module...", result: "✔" },
        { text: "Focusing on training goal...", result: "✔" },
        { text: "Distractions disabled...", result: "✔" },
        { text: "Tunnel vision engaged...", result: "✔" },

        // 🔊 Motivational Uplift
        { text: "Downloading motivational speech...", result: "✔" },
        { text: "Noise-canceling mode enabled...", result: "✔" },

        // 💪 Physical Activation
        { text: "Loading physical module...", result: "✔" },
        { text: "Hydration levels verified...", result: "✔" },
        { text: "Heart rate synchronized...", result: "✔" },
        { text: "Breathing pattern optimized...", result: "✔" },
        { text: "Joint mobility unlocked...", result: "✔" },
        { text: "Musculoskeletal system activated...", result: "✔" },
        { text: "Core temperature within optimal range...", result: "✔" },

        // 🧬 Final Checks & Boosts
        { text: "Analyzing external environment...", result: "✔" },
        { text: "Excuses neutralized...", result: "✔" },
        { text: "Loading performance enhancer: Creatine Boost...", result: "✔" },
        { text: "Loading performance enhancer: Neural Drive...", result: "✔" },
        { text: "Loading performance enhancer: Pain Tolerance Override...", result: "✔" },
        { text: "Loading performance enhancer: Mind-Muscle Link...", result: "✔" },

        // 🚀 Launch
        { text: "Finalizing training system...", result: "✔" },
        { text: "Loading BIZEPS.EXE...", result: "✔" },
        { text: "System ready. BEASTMODE engaged.", result: "✔" }
    ];

    for (const step of steps) {
        await wait(sleepTime);
        const msg = createMessage(step.text);
        await wait(sleepTime);
        msg.innerText += ` ${step.result}`;
    }

    // Step 4: Clear all
// Fade out all .message elements
    const messages = document.querySelectorAll('.message');
    messages.forEach(el => el.classList.add('fade-out'));
    await wait(sleepTime); // wait for fade-out transition to complete

// Then clear everything
    app.innerHTML = '';

    // Step 5: Final message
    const final = createMessage("A Bizeps Entertainment Production", 'final-message');
    createMessage("Coming 2025", 'final-message');
    createMessage("Stay tuned...", 'final-message');
}

bootSequence();
