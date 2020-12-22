<template>
  <b-container>
    <Page :title="text.title" :body="text.body" :footer="text.footer"/>
    {{text}}
  </b-container>
</template>

<script>
import Page from '@/components/PageComponent'

export default {
  components: {
    Page
  },
  computed: {
    text () {
      return this.$t('page_1')
    }
  }
}
</script>
