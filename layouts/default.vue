<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/HeaderConponent'
import Footer from '@/components/FooterComponent'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
