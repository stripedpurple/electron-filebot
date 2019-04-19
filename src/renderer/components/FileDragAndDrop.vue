<template>
    <section class="section has-background-info hero is-fullheight" @dragover.prevent @drop="onDrop">
        <div class="hero-body">
            <div class="file is-boxed is-large is-info has-text-centered is-full-width">
                <label class="file-label is-full-width">
                    <input class="file-input" type="file" name="resume" @change="onChange">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label has-text-uppercase">
                        Select or drop a files
                      </span>
                    </span>
                </label>
            </div>
        </div>
        <div class="columns" v-for="file in files">
            <div class="column">
                {{file.path}}
            </div>
        </div>
    </section>
</template>

<script>
  export default {
    data () {
      return {
        files: []
      }
    },
    name: 'drag-and-drop',
    methods: {
      onDrop: function (e) {
        e.stopPropagation()
        e.preventDefault()
        this.files = e.dataTransfer.files
        this.addFiles()
      },
      onChange (e) {
        this.files = e.target.files
        this.addFiles()
      },
      addFiles (link) {
        this.$store.dispatch('ADD_FILES', this.files)
        this.files = []
        this.$router.push('/match')
      }
    }
  }
</script>

<style>
    .has-text-uppercase{
        text-transform: uppercase;
    }

    .is-full-width{
        width: 100%;
    }

    .file {
        border: 5px dashed rgba(255,255,255,0.5);
        border-radius: 6px;
    }


    .file.is-boxed .file-cta{
        padding: 50px 3rem !important;
    }

</style>