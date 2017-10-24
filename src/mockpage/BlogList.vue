<template>
  <div>
    <article>
        {{ content }}
    </article>
    <input type="text" v-model="blogName">
    <a @click="getSomeBlog">获取某一篇文章</a>
  </div>
</template>

<script>
    export default {
        name: 'bloglist',
        data () {
            return {
                blogName: '',
            };
        },
        computed: {
            content () {
                return this.$store.state.appShell.appOneBlog.content;
            }
        },
        methods: {
            getSomeBlog () {
                let blogName = this.blogName;
                this.$store.dispatch({
                    type: 'appShell/appOneBlog/getBlogContent',
                    blogName: blogName,
                })
            }
        }
    }
</script>

<style>

</style>
