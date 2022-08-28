// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//  котра має детальну інфу про поточний пост.

let url = new URL(location.href)

let id = 'id'

let user = JSON.parse(url.searchParams.get('id'));
console.log(user);

////потрібно для домашнього все що вище

// fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(data => data.json())
//     .then(user => {
//         let div =document.createElement('div');
//         document.body.appendChild(div)
//         for (let key in user) {
//             if (typeof user[key] !== 'object') {
//                 let p = document.createElement('p');
//                 p.innerText = `${key}:${user[key]}`;
//                 div.appendChild(p)
//             } else {
//                 for (let item in user[key]) {
//                     if (typeof user[key][item] !== 'object') {
//                         let p1 = document.createElement('p');
//                         p1.innerText = `${item}:${user[key][item]}`;
//                         console.log(p1);
//                         div.appendChild(p1)
//                     } else {
//                         for (let element in user[key][item]) {
//                             if (typeof user[key][item][element] !== 'object') {
//                                 let p2 = document.createElement('p');
//                                 p2.innerText = `${element}:${user[key][item][element]}`;
//                                 console.log(p2);
//                                 div.appendChild(p2)
//                             }
//                         }
//
//                     }
//                 } } } })


// fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(data => data.json())
//     .then(user => {


//////потрібно для домашнього все що нижче

let div = document.createElement('div')
div.classList.add('user')
document.body.appendChild(div)

function userNew(user) {

    for (let key in user) {
        if (typeof user[key] !== 'object') {
            let p = document.createElement('p');
            p.classList.add('key')
            p.innerText = `${key}:${user[key]}`
            div.appendChild(p)
        } else {
            userNew(user[key])
        }
    }
}

userNew(user)


let postsButton = document.createElement('button')
postsButton.classList.add('postsButton');
document.body.appendChild(postsButton)
postsButton.innerText = 'Post of current user'
postsButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {

            let postsContainer = document.createElement('div')
            postsContainer.classList.add('posts')
            document.body.appendChild(postsContainer)

            for (let post of posts) {
                let postContainer = document.createElement('div');
                postsContainer.appendChild(postContainer)
                postContainer.classList.add('post');
                postContainer.innerText = post.title;

                let buttonPost = document.createElement('button');
                buttonPost.classList.add('buttonPost')
                postContainer.appendChild(buttonPost);
                buttonPost.innerText = `more`
                buttonPost.onclick = function () {
                    location.href = `post-details.html?id=${post.id}`;
                }

            }

        })

}

