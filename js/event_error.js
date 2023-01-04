Vue.createApp ({
  data() {
    return {
      path: '../img/_wings.jpg'
    };
  },
  methods: {
    onerror(){
      this.path = '../img/noimage.jpg'
    }
  }
}).mount('#app');