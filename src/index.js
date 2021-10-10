if (window.location.hash) {
    let hash = decodeURI(window.location.hash.slice(1));
    document.title = hash;
}
