Vue.component('nova-tarefa', {
  data: function(){
    return {
      novatarefa: '',
    };
  },
  methods: {
    add: function(){
      this.$store.commit('add_tarefa', this.novatarefa);
    }
  },
  template:`
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" 
          type="text" 
          placeholder="Text input"
          v-model="novatarefa"
          @keyup.enter="add()">
      </div>
    </div>
  `,
})