document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var collectionName = urlParams.get('name');
    var collections = JSON.parse(localStorage.getItem('collections')) || {};
    var collectionItems = collections[collectionName] || [];

    document.getElementById('collectionTitle').innerText = collectionName;
    var collectionItemsContainer = document.getElementById('collectionItems');

    collectionItems.forEach(function(item) {
        var col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card">
                <img src="images/${item}.jpg" class="card-img-top" alt="${item}">
                <div class="card-body">
                    <h5 class="card-title">${item}</h5>
                </div>
            </div>
        `;
        collectionItemsContainer.appendChild(col);
    });
});
