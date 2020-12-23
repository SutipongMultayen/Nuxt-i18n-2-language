<template>
  <div>
    <footer class="mt-5">
      <b-container>
        <b-row>
          <b-col
            cols="12"
            class="text-center border border-success"
          >
            {{ footer.app }}
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