window.API = window.API || {}

window.API = {
    listUsers: function listUsers(q){
        var url="https://api.github.com/search/users";
        return axios.get(url, {params:{q: q}});
    },
    listRepos: function listRepos(username){
        var url = 'https://api.github.com/users/'+username+'/repos'
        return axios.get(url);
    },
    listIssues: function listRepos(username, repo){
        var url = 'https://api.github.com/repos/'+username+'/'+repo+'/issues'
        return axios.get(url);
    }
}

// function _add_auth(params){
//     if(Global.GITHUB_ACCESS_TOKEN){
//         params['access_token'] = Global.GITHUB_ACCESS_TOKEN;
//     }
//     return params;
// }
