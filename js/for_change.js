Vue.createApp ({
  data() {
    return {
      list: ['赤パジャマ', '青パジャマ', '黄パジャマ']
    };
  },
  methods: {
    onclick(){
      this.list[0] = '茶パジャマ'
    }
  }
}).mount('#app');