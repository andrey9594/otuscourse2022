<template>
  <div class="hello">
    <h1 v-if="msg === 'Welcome My Friend2'">{{ msg }}</h1>
    <h1 v-else>'no' + {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  filters: {
    my_uppercase: function (value) {
      return String(value).toUpperCase();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
