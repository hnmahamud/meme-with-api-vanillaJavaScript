const displayUser = (data) => {
    console.log(data);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    cardContainer.innerHTML = `
    <figure><img class="h-96" src="${data.url ? data.url : 'https://picsum.photos/200/300'}" alt="" /></figure>
    <div class="card-body">
        <h2 class="card-title">${data.title}"</h2>
        <p>${data.author}</p>
        <div class="card-actions justify-end">
            <button onclick="loadUser()" class="btn btn-xs">Generate New Meme</button>
        </div>
    </div>
    `
}