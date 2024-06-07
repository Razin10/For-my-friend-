const emoji1 = document.querySelector('.emoji-1');
const emoji2 = document.querySelector('.emoji-2');
const emojiContainer1 = document.querySelector('.emoji-container');
const emojiContainer2 = document.querySelector('.emoji-container.hidden');

emoji1.addEventListener('click', function() {
    emojiContainer1.classList.add('fade-out');
    emojiContainer2.classList.add('fade-in');

    setTimeout(function() {
        emojiContainer1.style.display = 'none';
        emojiContainer2.classList.remove('hidden');
        emojiContainer1.classList.remove('fade-out');
    }, 1000);
});
