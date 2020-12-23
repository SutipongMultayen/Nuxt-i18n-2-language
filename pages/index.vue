<template>
  <b-container>
    <Page :title="text.title" :body="text.body" :footer="text.footer" />
    <!-- {{ text }} -->
    <h1 class="mb-5">{{ chckDate() }}</h1>
    <!-- $t = Return TranslateResult -->
    <!-- $d = DateTime localization  -->
    <!-- {{ $d(new Date()) }} -->
  </b-container>
</template>

<script>
import moment from 'moment'
import Page from '@/components/PageComponent'

export default {
  components: {
    Page,
  },
  computed: {
    text() {
      return this.$t('index')
    },
  },
  methods: {
    chckDate() {
      // this.$i18n.locales จะเป็น get locales ที่เรามีทั้งหมดมา จาก nuxt.config.js
      let DateLocale = this.$i18n.locales.find((i) => i.code == this.$i18n.locale)
      if (DateLocale.code == 'th') {
           return moment(new Date()).locale('th').format('LL')
      } else if (DateLocale.code == 'lo') {
        return moment(new Date()).locale('lo').format('LL')
      } else if (DateLocale.code == 'en') {
        return moment(new Date()).locale('en').format('LL')
      }
    },
  },
}
</script>
