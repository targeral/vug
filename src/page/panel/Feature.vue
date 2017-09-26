<template>
  <nav class="feature">
    <template v-for="(item, index) of features">
      <router-link class="feature-item" :exact="item.exact" :to="item.feature" :key="index">{{ item.value }}</router-link>
    </template>
  </nav>
</template>

<script>
  export default {
    name: 'feature',
    data () {
      return {};
    },
    props: {
      features: {
        type: Array,
        default () {
          return [
            {
              value: 'Main Page',
              feature: {
                name: 'Hello'
              },
              exact: true,
            },
            {
              value: 'List',
              feature: {
                name: 'List'
              }
            }
          ];
        }
      }
    }
  }
</script>

<style lang="postcss">
@import '../../index.css';

.feature {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: baseline;
  padding: 10px 0px 0px 10px;
}
.feature-item {
  display: block;
  padding: 5px;
  margin: 0px 5px 5px 0px;
  border: 1px solid #f56e25;
  border-radius: 4px;
  color: #3d444f;
  background-color: rgba(245, 110, 37, 0.2);
  text-decoration: none;
  font-size: 13px;

  &.router-link-active, &:hover {
    background-color: rgba(245, 110, 37, 1);
    color: $white-lighter;
    border-color: rgba(245, 110, 37, 0.2);
  }
}
</style>

