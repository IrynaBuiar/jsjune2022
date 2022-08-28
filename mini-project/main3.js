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
        div.classList.add('post')
        document.body.appendChild(div)

        function postNew(post) {
            for (let key in post) {
                if (typeof post[key] !== 'object') {
                    let p = document.createElement('p');
                    p.innerText = `${key}:${post[key]}`
                    div.appendChild(p)
                } else {
                    postNew(post[key])
                }
            }
        }

        postNew(post)
        fetch(` https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((comments) => {
                let coments = document.createElement('div')
                coments.classList.add('coments')
                document.body.appendChild(coments)
                for (let comment of comments) {
                    let commentContainer = document.createElement('div');
                    commentContainer.classList.add('comment');
                    commentContainer.innerText = ` ${comment.id} -- ${comment.body}`;
                    console.log(comment);
                    coments.appendChild(commentContainer)
                }
            })
    })

