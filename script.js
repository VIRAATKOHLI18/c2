const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const messageBox = document.getElementById('messageBox');

yesButton.addEventListener('click', () => {
    messageBox.innerHTML = `
        <p>“In the softest whispers of the wind,</p>
        <p>Your name is all my heart can sing.</p>
        <p>To hold your hand, forever dear,</p>
        <p>You said yes, and now you're here.”</p>
        <p>Thank you for making my world brighter,</p>
        <p>With you, my heart feels lighter. 💖</p>
        <div class="pulse-heart"></div>
    `;
    messageBox.style.display = 'block';
    hideButtons();
});

noButton.addEventListener('click', () => {
    messageBox.innerHTML = `
        <p>“Oh dear heart, though you've said no,</p>
        <p>The stars may still align and show</p>
        <p>A world where we will laugh and smile,</p>
        <p>Maybe just wait, and love a while.”</p>
        <p>Are you sure you don’t want to reconsider? 🥺</p>
        <button id="yesPleaseButton">Reconsider? 😊</button>
    `;
    messageBox.style.display = 'block';
    hideButtons();

    document.getElementById('yesPleaseButton').addEventListener('click', () => {
        messageBox.innerHTML = `
            <p>“You changed your mind, and now I see,</p>
            <p>Our hearts were meant to always be.</p>
            <p>Thank you, love, for saying yes,</p>
            <p>Now together, we'll be our best.”</p>
            <div class="pulse-heart"></div>
        `;
    });
});

function hideButtons() {
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
}
