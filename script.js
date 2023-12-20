document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('christmasAudio');

     if (audio) {
        // Play audio on user interaction
        document.body.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
            }
        });

        // Play audio on page load (may not work on some browsers)
        audio.play();
    } else {
        console.error("Audio element with ID 'christmasAudio' not found.");
    }

    // Generate snow
    let container = document.getElementById('container');
    generateSnow(container, 50);

    // Prepopulate the list with names
    const initialNames = ["ANJANA", "SANIGA", "ABHI", "JISHNU", "GOPIKA", "DEVIKA", "ANU", "MINI", "PAPPAN", "ANUPAMA", "THASNI", "SONI", "RAHUL"];
    const nameList = document.getElementById('nameList').querySelector('ul');
    initialNames.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        nameList.appendChild(listItem);
    });

    // Initialize fire particles
    createFire();
});

function generateSnow(container, count) {
    for (let i = 0; i < count; i++) {
        let leftSnow = Math.floor(Math.random() * container.clientWidth);
        let topSnow = Math.floor(Math.random() * container.clientHeight);
        let widthSnow = Math.floor(Math.random() * 50);
        let timeSnow = Math.floor((Math.random() * 5) + 5);
        let blurSnow = Math.floor(Math.random() * 20);
        let div = document.createElement('div');
        div.classList.add('snow');
        div.style.left = leftSnow + 'px';
        div.style.top = topSnow + 'px';
        div.style.width = widthSnow + 'px';
        div.style.height = widthSnow + 'px';
        div.style.animationDuration = timeSnow + 's';
        div.style.filter = "blur(" + blurSnow + "px)";
        container.appendChild(div);
    }
}

function addName() {
    const nameInput = document.getElementById('nameInput');
    const nameList = document.getElementById('nameList').querySelector('ul');

    if (nameInput.value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = nameInput.value;
        nameList.appendChild(listItem);
        nameInput.value = '';
    }
}

// Function to open the gift box
const giftMap = {
    "ANJANA": "/images/gift1.gif",
    "SANIGA": "/images/gift2.gif",
    "ABHI": "/images/gift4.gif",
    "JISHNU":"/images/gift5.gif",
    "GOPIKA":"/images/gift6.gif",
    "DEVIKA":"/images/gift7.gif",
    "RAHUL":"/images/gift10.gif",
    "MINI" : "/images/gift8.gif",
    "PAPPAN":"/images/giftwine.gif",
    "ANUPAMA":"/images/gift11.gif",
    "ANU":"/images/gift10.gif",
    "THASNI":"/images/gift7.gif",

    
    // Add more names and gifts as needed
};

function openGift() {
    const nameList = document.getElementById('nameList').querySelector('ul');
    const lastEnteredName = nameList.lastElementChild;

    if (lastEnteredName) {
        const name = lastEnteredName.textContent.toUpperCase();

        // Check if the name exists in the gift map
        if (giftMap.hasOwnProperty(name)) {
            const giftImagePath = giftMap[name];

            // Construct the URL with query parameters
            const url = `gift.html?name=${encodeURIComponent(name)}&gift=${encodeURIComponent(giftImagePath)}`;

            // Navigate to the gift.html page
            window.location.href = url;
        } else {
            alert(`Sorry, no gift found for ${name}.`);
        }
    } else {
        alert('Please enter a name before opening the gift.');
    }
}


function createFire() {
    const fireContainer = document.getElementById('fire');
    
    for (let i = 0; i < 50; i++) {
        const fireParticle = document.createElement('div');
        fireParticle.classList.add('fire-particle');
        fireContainer.appendChild(fireParticle);
    }
}



