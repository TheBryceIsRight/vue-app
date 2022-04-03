<template>
  <v-app>
    <v-main>
      
      <hello-world/>
    </v-main>
  </v-app>

</template>

<script>
import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: { HelloWorld },
  name: 'App',
  data () {
    return {
      blogs: [],
      error: null
    }
  },
  async mounted () {
    try {
      axios.get('http://localhost:1337/api/blogs').then(response => {
        console.log(response);
      });
      const response = await axios.get('http://localhost:1337/api/blogs')
      this.blogs = response.data.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
