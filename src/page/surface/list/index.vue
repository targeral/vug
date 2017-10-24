<template>
  <div class="list-page">
      <card title="全部文章">
        <card-grid style="width: 100%;margin-bottom: 10px;">
          <markdown :more="true" />
        </card-grid>
        <card-grid style="width: 100%;margin-bottom: 10px;">
          <markdown :more="true" />
        </card-grid>
        <card-grid style="width: 100%;margin-bottom: 10px;">
          <markdown :more="true" />
        </card-grid>
        <card-grid style="width: 100%;margin-bottom: 10px;">
          <markdown :more="true" />
        </card-grid>
        <card-grid style="width: 100%;margin-bottom: 10px;">
          <markdown :more="true" />
        </card-grid>
        <card-grid style="width: 100%;margin-bottom: 10px;">
          <markdown :more="true" />
        </card-grid>
      </card>
  </div>
</template>

<script>
  import H from './h';
  import { Card, Markdown } from '@/components'

  const CardGrid = Card.Grid
  const components = { H, Card, CardGrid, Markdown };
  const mockData = [];
  console.log(Markdown)
  export default {
    name: 'list',
    components: components,
    data () {
      return {
        test: '测试'
      };
    },
    props: {
      items: {
        type: Array,
        default () {
          return mockData;
        }
      }
    },
  }
</script>

<style lang="postcss">
  .ant-card-head {
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .list-page {
    height: 100vh;
    overflow: auto;
    border: 1px solid #fff;
  }
</style>


