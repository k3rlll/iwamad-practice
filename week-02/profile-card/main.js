const likeBtn = document.querySelector('#like-btn');
const card = document.querySelector('.card');


likeBtn.addEventListener('click', () => {
    const isLiked = likeBtn.classList.toggle('liked-state');
    
   
    if (isLiked) {
        likeBtn.textContent = '❤️ Liked';
        likeBtn.style.backgroundColor = '#fecaca'; 
        likeBtn.style.color = '#ef4444';
        card.style.borderColor = '#ef4444'; 
    } else {
        likeBtn.textContent = '♡ Like';
        likeBtn.style.backgroundColor = '#f3f4f6';
        likeBtn.style.color = '#374151';
        card.style.borderColor = '#e5e7eb'; 
    }
});