<template>
  <div class="list">
    <section class="list-item">
      <ul>
        <li>标题组件h1-h5</li>
        <li>段落组件</li>
        <li>图片组件</li>
        <li>表格组件</li>
        <li>引用组件</li>
        <li>列表组件</li>
        <li>分隔线组件</li>
        <li>链接</li>
        <li>强调</li>
        <li>代码</li>
        <li>more组件</li>
      </ul>
      <h level="1" content="lala" />
    </section>
  </div>
</template>

<script>
  import H from './h';

  const components = { H };
  const mockData = [];

  export default {
    name: 'list',
    components: components,
    data () {
      return {};
    },
    props: {
      items: {
        type: Array,
        default () {
          return mockData;
        }
      }
    }
  }
</script>

<style lang="postcss">

</style>


