Vue.component('github-issues', {
  data: function(){
    return {
      headers: [
        {text: 'Número', value: 'number'},
        {text: 'Título', value: 'title'},
      ],
      searchUser: '',
      selectedUser: null,
      selectedRepo: null,
      users: [],
      repos: [],
      issues: [],
      loadingUser: false,
      loadingRepos: false,
      loadingIssues: false,
    };
  },
  watch: {
    searchUser (val) {
      if(!val){
        this.users = []
        return
      }
      // if (this.users.length > 0) {
      //   return
      // }
      this.loadingUser = true
      API.listUsers(val).then(r => {
        this.users = r.data.items
      }).finally(() => {
        this.loadingUser = false
      })
    },
    selectedUser () {
      this.loadingRepos = true
      API.listRepos(this.selectedUser.login).then(r => {
        this.repos = r.data
      }).finally(() => {
        this.loadingRepos = false
      })
      console.log(this)
    },
    selectedRepo () {
      this.loadingIssues = true
      API.listIssues(this.selectedUser.login, this.selectedRepo.name).then(r => {
        this.issues = r.data
      }).finally(() => {
        this.loadingIssues = false
      })
    }
  },
  template:`
    <div>
      <v-card
        dark
      >
        <v-card-title><h1>Issues do Github</h1></v-card-title>
        <v-card-text>
          <v-form>
            <v-autocomplete
              v-model="selectedUser"
              :items="users"
              :loading="loadingUser"
              :search-input.sync="searchUser"
              color="white"
              hide-no-data
              hide-selected
              item-text="login"
              label="Public APIs"
              placeholder="Start typing to Search"
              return-object
            ></v-autocomplete>
            <v-select
              v-model="selectedRepo"
              :items="repos"
              :loading="loadingRepos"
              label="Repo"
              item-text="name"
              return-object
            ></v-select>
          </v-form>

          <v-data-table
            :headers="headers"
            :items="issues"
            hide-actions
            class="elevation-1"
            :loading="loadingIssues"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.number }}</td>
              <td>{{ props.item.title }}</td>
            </template>
          </v-data-table>

        </v-card-text>
      </v-card>
    </div>
  `,
})