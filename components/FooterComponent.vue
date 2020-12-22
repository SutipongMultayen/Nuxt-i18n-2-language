<template>
  <div>
    <footer>
      <b-container>
        <b-row>
          <b-col
            cols="12"
            class="text-center"
          >
            {{ footer.app }}
            <br>
            {{footer}}
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    footer () {
      return this.$t('footer')
    }
  }
}
</script>