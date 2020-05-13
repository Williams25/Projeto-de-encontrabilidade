function salvarPost(dados){
    if(!localStorage['posts']) localStorage['posts'] = '[]'
    const posts = JSON.parse(localStorage['posts'])
    dados.id = new Date().getTime()
    posts.push(dados)
    localStorage['posts'] = JSON.stringify(posts)
}

function verPost() {
    try {
        return this.JSON.parse(localStorage['posts'])
    } catch (error) {
        return error
    }
}

function remover(index) {
    const post = JSON.parse(localStorage['posts'])
    post.splice(index, 1)
    localStorage['posts'] = JSON.stringify(post)
}