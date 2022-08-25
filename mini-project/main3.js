// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
let url = new URL(location.href)
let id = JSON.parse(url.searchParams.get('id'));
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(data => data.json())
    .then(post => {
        let div = document.createElement('div')
        document.body.appendChild(div)

        function userNew(post) {
            for (let key in post) {
                if (typeof post[key] !== 'object') {
                    let p = document.createElement('p');
                    p.innerText = `${key}:${post[key]}`
                    div.appendChild(p)
                } else {
                    userNew(post[key])
                }
            }
        }
        userNew(post)
        fetch(` https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((comments)=> {
                for (let comment of comments) {
                    let commentContainer = document.createElement('div');
                    commentContainer.classList.add('comment');
                    commentContainer.innerText = ` ${comment.id} -- ${comment.body}`;
                    console.log(comment);

                    document.body.appendChild(commentContainer)
                }
            })
            })
// let postsButton = document.createElement('button')
// document.body.appendChild(postsButton)
// postsButton.innerText = 'Post of current user'
// postsButton.onclick = function (){


//   let container = document.getElementsByClassName('coment')[0]
//    container.innerHTML = '';

// let buttonCom = document.createElement('button');
// comentContainer.appendChild(buttonCom);
// buttonCom.innerText = `more`
// buttonCom.onclick = function () {
//     location.href = `post-details.html?id=${coment.id}`;
// }
// document.body.appendChild(comentContainer)






// fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//     .then(value => value.json())
//     .then(posts => {
//         //let commentsContainer = document.getElementsByClassName('comments')[0];
//         for (const comment of comments) {
//             let comment = document.createElement('div');
//             comment.classList.add('comment');
//             comment.innerText=`${comment.id}--${comment.title}`
//             userNew(post, newcomment);
//             commentsContainer.appendChild(newcomment);
//         }
//     })


// let commentsContainer = document.getElementsByClassName('comments')[0];
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//     .then(value => value.json())
//     .then(value => {
//         for (const commentItem of value) {
//             let commentContainer = document.createElement('div');
//             commentContainer.innerText = commentItem.body;
//
//             commentsContainer.appendChild(commentContainer);
//         }
//     });