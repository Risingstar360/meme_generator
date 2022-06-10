const memeInfo = document.querySelector('#memecontent');
const imageUrl = document.querySelector('input[name="image"]');
const topText = document.querySelector('input[name="toptext"]');
const btmText = document.querySelector('input[name="btmtext"]');
const results = document.querySelector('#results');

results.addEventListener('click', function(e){
if(e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
}

});

memeInfo.addEventListener('submit', function(e) {
    e.preventDefault();
    const newImg = document.createElement('img');
    newImg.src = imageUrl.value;
    newImg.classList.add("mystyle");
    imageUrl.value = '';
    const headerText = document.createElement('p'); 
    headerText.innerText = topText.value;
    headerText.classList.add("headertext");
    topText.value = '';
    const footerText = document.createElement('p');
    footerText.innerText = btmText.value;
    footerText.classList.add("footertext");
    btmText.value = '';
    const completedMeme = document.createElement('div');
    completedMeme.append(newImg, headerText, footerText);
    results.appendChild(completedMeme);
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    completedMeme.appendChild(removeBtn);
});
