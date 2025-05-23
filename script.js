import storyData from './storyData.js';
import Player from './player.js';

let weapon = null;

const player = new Player();
let currentPassageId = 1;

document.getElementById('start-button').addEventListener('click', startStory);

function startStory() {
    player.playerName = document.getElementById('player-name').value.trim();

    if (player.playerName !== '') {
        hideStartContainer();
        showStoryContainer();
        displayPassage(currentPassageId);
    } else {
        alert('Please enter your name.');
    }
}

function hideStartContainer() {
    document.getElementById('start-container').style.display = 'none';
}

function showStoryContainer() {
    document.getElementById('story-container').style.display = 'block';
}

function displayPassage(passageId) {
    const passage = storyData.find(p => p.id === passageId);
    const passageTextElement = document.getElementById('passage-text');
    const choicesListElement = document.getElementById('choices-list');
    const imageElement = document.getElementById('image');

    clearElement(passageTextElement);
    clearElement(choicesListElement);

    if (!passage) {
        console.error(`Passage with id ${passageId} not found.`);
        return;
    }

    passage.texts.forEach(text => {
        appendTextElement(passageTextElement, text);
    });

    setImageSource(imageElement, passage.image);

    // --- PLAY SOUND if there is one ---
    if (passage.Sound) {
        playSound(passage.Sound);
    }

    if (passage.choices && passage.choices.length > 0) {
        console.log("Choices available.");
        passage.choices.forEach(choice => {
            appendChoiceElement(choicesListElement, choice);
        });
    } else {
        console.log("No choices available.");
    }

    updatePlayerNameInPassageText(passageTextElement);
}

function clearElement(element) {
    element.innerHTML = '';
}

function appendTextElement(parent, text) {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = text;
    parent.appendChild(paragraphElement);
}

function setImageSource(element, image) {
    element.src = image || '';
}

function handleUnlock(choice) {
    if (choice.unlock) {
        weapon = choice.unlock
    }
}

function handlePassageCondition(choice) {
    console.log(weapon);
    console.log(choice.nextId);
    if (choice.nextId == 20) {
        if (weapon == "gun") {
            return 63;
        } else if (weapon == "machete") {
            return 544;
        } else if (weapon == "baseball") {
            return 543;
        }
    } else {
        return choice.nextId;
    }
}

function appendChoiceElement(parent, choice) {
    const choiceElement = document.createElement('li');
    choiceElement.textContent = choice.text;
    choiceElement.addEventListener('click', () => {
        handleUnlock(choice);
        let nextId = handlePassageCondition(choice);
        currentPassageId = nextId;
        displayPassage(currentPassageId);
    });
    parent.appendChild(choiceElement);
}

function updatePlayerNameInPassageText(element) {
    element.innerHTML = element.innerHTML.replace(/\[playerName\]/g, player.playerName);
}

function playSound(soundFilePath) {
    const sound = new Audio(soundFilePath);
    sound.play().catch((error) => {
        console.error('Error playing sound:', error);
    });
}

// Only one initial call to displayPassage needed
displayPassage(currentPassageId);
