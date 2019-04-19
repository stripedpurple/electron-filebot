<template>
  <section class="section has-background-primary hero is-fullheight">
    <div class="columns">
      <div class="column" v-for="file in files">
        {{file.path}}
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        newFiles: []
      }
    },
    name: 'file-match',
    computed: {
      ...mapState({
        files: state => state.Files.files
      })
    }
  }
</script>

<style>

</style>