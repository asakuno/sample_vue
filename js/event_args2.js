Vue.createApp ({
  data() {
    return {
    };
  },
  methods: {
    onclick(message, e){
      console.log(message);
      console.log(e);
    }
  }
}).mount('#app');