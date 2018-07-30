window.API = window.API || {}

window.API = {
    listUsers: _mockasync(function listUsers(name){
        var users = [
            {
                "login": "joao",
                "id": 594112,
                "avatar_url": "https://avatars.githubusercontent.com/u/594112?",
                "gravatar_id": "39ebccd822b6fb533e004ee722c38e9d",
                "url": "https://api.github.com/users/tonylukasavage",
                "type": "User"
            },
            {
                "login": "josé",
                "id": 31147,
                "avatar_url": "https://avatars.githubusercontent.com/u/31147?",
                "gravatar_id": "43b2ca65e7a2cadf849adf103e6c066d",
                "url": "https://api.github.com/users/tonylukasavage",
                "type": "User"
            }
        ]
        users = users.filter(u => u.login.indexOf(name) == 0)
        return {
            "total_count": 233,
            "incomplete_results": false,
            "items": users,
        }
    }),
    listRepos: _mockasync(function listRepos(username){
        return [
            {name: 'Projeto 1'},
            {name: 'Projeto 2'}
        ]
    }),
    listIssues: _mockasync(function listIssues(username, repo){
        return [
            {number: 88, title: 'Construir a máquina do tempo'},
            {number: 42, title: 'Encontrar a resposta da vida, do universo, e tudo mais'},
        ]
    })
};

function _mockasync(f){
    function mocked(){
        var res = f.apply(this, arguments);
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve({data: res});
            }, 600);
        });
    }
    return mocked;
}