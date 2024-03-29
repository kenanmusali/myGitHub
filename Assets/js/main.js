const postsElem = document.querySelector(".users");
const searchInput = document.querySelector(".input");

console.log(searchInput)
function fetchUser() {
    // const searchQuery = document.querySelector(".input").value
    let url = `https://api.github.com/users/kenanmusali`;

    fetch(url)
    .then((res) => res.json())
    .then((user) => {
        postsElem.innerHTML = `

            <div class="row bar1">
            <div class="title">
                <div class="titleNames">
                    <p class="headName">myGitHub</p>
                    <img class="icon0" src="./Icons/github.svg" alt="GitHub">
                </div>
                <p class="titleName">Personal User GitHub Design</p>
            </div>
            <div class="section">
                <img class="icon" src="./Icons/Language.svg" alt="Language">
            </div>

            <div class="section">
                <img class="icon" src="./Icons/darkmode.svg" alt="Dark-Mode">
            </div>
            <div class="section">
                <img class="icon" src="./Icons/login.svg" alt="Account">
                <p class="login">Log In</p>
            </div>
        </div>
        <div class="flex">

            <div class="firtFull-row">
                <div class="row bar2">
                    <div class="search">
                        <input class="input" type="text" placeholder="Type here to search"> <img class="icon"
                            src="./Icons/search.svg" alt="Search">
                    </div>
                    <div class="profile">
                        <div class="div-profile">
                            <img class="profileImg" src="${user.avatar_url}" alt="Profile">
                            <p class="headText headText1 ">${user.name}</p>
                        </div>
                        <p class="text">${user.login}</p>
                    </div>


                </div>

                <div class="row bar">
                    <div class="oneSection">
                        <div class="repositories">
                            <div class="div-RepoGit">
                                <img class="icons" src="./Icons/respositories.svg" alt="Repositories">
                                <p class="headText">Repositories</p>
                            </div>
                            <p class="text">${user.public_repos}</p>
                        </div>

                        <div class="gits">
                            <div class="div-RepoGit">
                                <img class="icons" src="./Icons/gits.svg" alt="Gits">
                                <p class="headText">Gits</p>
                            </div>
                            <p class="text">${user.public_gists}</p>
                        </div>
                    </div>
                </div>

                <div class="row bar">
                    <div class="oneSection">
                        <div class="repositories">
                            <div class="div-RepoGit">
                                <img class="icons0" src="./Icons/following.svg" alt="Following">
                                <p class="headText">Following</p>
                            </div>
                            <p class="text">${user.following}</p>
                        </div>

                        <div class="gits">
                            <div class="div-RepoGit">
                                <img class="icons1" src="./Icons/followers.svg" alt="Followers">
                                <p class="headText">Followers</p>
                            </div>
                            <p class="text">${user.followers}</p>
                        </div>
                    </div>
                </div>

                <div class="row bar">
                    <div class="dateCreated">
                        <div class="div-time">
                            <div class="time">
                                <img class="icons" src="./Icons/created.svg" alt="Following">
                                <p class="headText">Created At:</p>
                            </div>
                            <p class="text">${user.created_at}</p>
                        </div>
                        <div class="div-time">
                            <div class="time">
                                <img class="icons" src="./Icons/uptaded.svg" alt="Following">
                                <p class="headText">Uptaded At:</p>
                            </div>
                            <p class="text">${user.updated_at}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="secoundFull-row">
                <div class="row bar">
                    <div class="about">
                        <p class="aboutUser">About User</p>

                        <div class="div-divTwoSec">
                            <div class="div-TwoSec">
                                <p class="one one1">Name</p>
                                <p class="two">${user.name}</p>
                            </div>
                            <div class="div-TwoSec">
                                <p class="one one2">User Name</p>
                                <p class="two">${user.login}</p>
                            </div>
                            <div class="div-TwoSec">
                                <p class="one one3">User Bio</p>
                                <p class="two">${user.bio}</p>
                            </div>
                            <div class="div-TwoSec">
                                <p class="one one4">Company</p>
                                <p class="two">${user.company}</p>
                            </div>
                            <div class="div-TwoSec">
                                <p class="one one5">Location</p>
                                <p class="two">${user.location}</p>
                            </div>
                            <div class="div-TwoSec">
                                <p class="one one6">Blog</p>
                                <p class="two">${user.blog}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row bar">
                    <div class="divAll">
                        <div class="div-Alternative">
                            <div class="div-twitter">
                                <p class="one one7">Twitter (X)</p>
                                <p class="two">${user.twitter_username}</p>
                            </div>
                            <div class="div-mail">
                                <div class="div">
                                    <p class="one one8">User Email</p>
                                    <p class="two two1">${user.email}</p>
                                </div>
                                <div class="div">
                                    <p class="one one9">Hireable</p>
                                    <p class="two two1">${user.hireable}</p>
                                </div>
                            </div>
                        </div>

                        <div class="div-following">
                            <p class="follow">Following</p>
                            <div class="div-follows">
                                <img class="follows" src="${user.avatar_url}" alt="Profile">
                                <p class="headText1 headText">${user.login}</p>
                            </div>
                        </div>

                        <div class="div-followers"> 
                            <p class="follow">Followers</p>
                            <div class="div-follows">
                                <img class="follows" src="${user.avatar_url}" alt="Profilee">
                                <p class="headText1 headText">${user.login}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row bar">
            <div class="title">
                <p class="titleName">© 2024 GitHub, Inc.</p>
                <p class="titleName">Terms</p>
                <p class="titleName">Privacy</p>
                <p class="titleName">Security</p>
                <p class="titleName">Status</p>
                <p class="titleName">Docs</p>
                <p class="titleName">Contact</p>
                <p class="titleName">Manage Cookies</p>
                <p class="titleName">Do not share my personal information</p>
            </div>
        </div>`;
    });
}


fetchUser("");

searchInput.addEventListener("input", function () {
    fetchUser(this.value.trim());
});
