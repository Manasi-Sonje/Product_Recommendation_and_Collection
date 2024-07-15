document.addEventListener('DOMContentLoaded', function() {
    var collections = JSON.parse(localStorage.getItem('collections')) || {};
    var collectionsContainer = document.getElementById('collectionsContainer');

    for (var collectionName in collections) {
        var card = document.createElement('div');
        card.className = 'card shadow-sm';
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="images/default.jpg" class="card-img-top" alt="${collectionName}">
            </div>
            <div class="card-body d-flex flex-column">
                <center><h5 class="card-title text-center">${collectionName}</h5></center><br><br><br><br>
                <a href="view_collection.html?name=${collectionName}" class="btn btn-primary mt-auto">View Collection</a>
            </div>
        `;
        collectionsContainer.appendChild(card);
    }
});
