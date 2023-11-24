const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    //stores the event
    window.defferedPrompt = event;

    //removes class from the button
    butInstall.classList.toggle("hidden", false);
});

//implements a click event handler on the "butInstall" element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;

    if (!promptEvent) {
        return;
    }
    //shows prompt
    promptEvent.promt();
    //resets the deferred prompt variable, it can only be used once.
    window.defferedPrompt = null;

    butInstall.classList.toggle("hidden", true);
});

window.addEventListener('appinstalled', (event) => {
    //clears prompt
    window.defferedPrompt = null;
});
