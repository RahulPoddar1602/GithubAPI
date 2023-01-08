const APIURL ="https://api.github.com/users/";
const main = document. querySelector("#main");
const getUser = async(username) =>{
    const response = await fetch(APIURL + username);
    const data = await response.json();
    const card =`
    <div class="card">
            <div class="img">
                <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>
                <ul class="info">
                    <li>${data.followers} <strong>Followers</strong></li>
                    <li>${data.following} <strong>Following</strong></li>
                    <li>${data.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos">

                </div>
                </div>
                </div>
                `
                main.innerHTML = card;
                getRepos(username) 
}
const getRepos = async (username)=>{
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username +"/repos")
    const data = await response.json();
    data.forEach(item => {
        console.log(item)
        const elem = document.createElement("a")
        elem.classList.add("repo")
        elem.href = item.html_url
        elem.target = "_blank"
        elem.innerText = item.name
        repos.appendChild(elem)
    })

}
const formSubmit=()=>{
    const searchBox = document.getElementById("search");
    if(searchBox.value !="")
    {
        getUser(searchBox.value);
        searchBox.value = "";
    }
    return false;
}
                // <a href="#" class="repo" target="_blank">Repo 1</a>
                // <a href="#" class="repo" target="_blank">Repo 2</a>
                // <a href="#" class="repo" target="_blank">Repo 3</a>