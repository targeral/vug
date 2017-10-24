<script>
  export default {
    name: 'h',
    render (createElement) {
      console.log(createElement);
      return createElement(
        'h' + this.level,
        {
          class: 'blog-h blog-h' + this.level,
        },
        this.content
      );
    },
    props: {
      level: {
        type: [String, Number],
        default: 1,
      },
      content: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style lang="postcss">
.blog-h {
  margin-top: 15px 0px 0px 0px;
}
.blog-h1 {
  font-size: 42px;

  &:nth-of-type {
    margin-top: 0;
  }
}

.blog-h2 {
  font-size: 36px;
}
</style>
