// joshua era button
const button = document.getElementById('eraButton');

button.addEventListener('click', function() {
    alert('welcome to the joshua era');
})


// favourite songs
const songsContainer = document.getElementById("songsContainer");

function getStars(rating) {
    return "⭐️".repeat(rating);
}

function displaySongs(songList) {
    songsContainer.innerHTML = "";
    songList.forEach(function(song) {
        songsContainer.innerHTML += `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h3>${song.title}</h3>
                    <h3>${getStars(song.rating)}</h3>
                </div>

                <div class="flip-card-back">
                    <p>${song.explanation}</p>
                </div>
            </div>
        </div>
        `;
    });
};

displaySongs(songs);


// song search
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();

    const filteredSongs = songs.filter(function(song) {
        return song.title.toLowerCase().includes(searchText) ||
               song.alias.toLowerCase().includes(searchText);
    });

    displaySongs(filteredSongs);
});


// song filter
const albumFilter = document.getElementById("albumFilter");
const albums = [...new Set(
    songs
        .filter(function(song) {
            return song.album !== null;
        })
        .map(function(song) {
            return song.album;
        })
)];

albums.forEach(function(album) {
    albumFilter.innerHTML += `
        <option value="${album}">${album}</option>
    `;
});

albumFilter.addEventListener("change", function() {
    const selectedAlbum = albumFilter.value;
    const filteredSongs = songs.filter(function(song) {
        if (selectedAlbum === "all") {
            return true;
        }
        return song.album === selectedAlbum;
    });

    displaySongs(filteredSongs);
});