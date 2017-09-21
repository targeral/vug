<template>
  <div>
      <a @click="getAllBlogs">获得所有blogs</a>
      <input type="text" v-model="classify">
      <a @click="getSomeBlogs">获得某一类blogs</a>
      <h2>{{ classify }}</h2>
      <ul v-for="(item, index) of bloglist">
          <li :key="index">{{ item.name }}</li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: 'blogcontent',
        data () {
            return {
                classify: 'All',
            };
        },
        computed: {
            bloglist () {
                return this.$store.state.appShell.appBlogList.list;
            }
        },
        methods: {
            getAllBlogs () {
                this.$store.dispatch({
                    type: 'appShell/appBlogList/getAllBlogs',
                })
            },
            getSomeBlogs () {
                let which = this.classify;
                this.$store.dispatch({
                    type: 'appShell/appBlogList/getSomeBlogs',
                    which: which,
                });
            }
        }
    }
</script>

<style>

</style>
