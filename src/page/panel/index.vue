<template>
  <div id="panel">
    <PersonData class="panel-person-data" />
    <Feature class="panel-feature" />
    <Share class="panel-share" />
  </div>
</template>

<script>
  import PersonData from './PersonData';
  import Feature from './Feature';
  import Share from './Share';
  export default {
    name: 'panel',
    components: {
      PersonData,
      Feature,
      Share,
    }
  }
</script>

<style lang="postcss">
#panel {
  background-color:antiquewhite;
  border-right: 1px solid #999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  .panel-person-data {
    flex: 3 1 0;
  }
  .panel-feature {
    flex: 3 1 0;
  }
  .panel-share {
    flex: 1 3 0;
  }
}
</style>
