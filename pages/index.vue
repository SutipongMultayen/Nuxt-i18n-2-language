<template>
  <b-container>
    <Page :title="text.title" :body="text.body" :footer="text.footer" />
    <!-- {{ text }} -->
    {{ chckDate() }}
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
      let DateA = this.$i18n.locales.find((i) => i.code == this.$i18n.locale)
      if (DateA.code == 'th') {
           return moment(new Date()).locale('th').format('LL')
      } else if (DateA.code == 'la') {
        return moment(new Date()).locale('lo').format('LL')
      } else if (DateA.code == 'en') {
        return moment(new Date()).locale('en').format('LL')
      }
    },
  },
}
</script>
