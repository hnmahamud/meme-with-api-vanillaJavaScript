const loadUser = () => {
    fetch('https://meme-api.com/gimme')
    .then(res => res.json())
    .then(data => displayUser(data))
}
loadUser();