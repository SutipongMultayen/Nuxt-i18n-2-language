<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="localePath({ name: 'index' })">{{
        header.app
      }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- localePath คือ Path ไปยังหน้าอื่น เป็น locale เพื่อให้สามารถเปลี่ยนภาษาได้-->
          <!-- <b-nav-item :to="localePath('/pageone')">{{ header.link.page_1 }}</b-nav-item> -->
          <b-nav-item :to="localePath({ name: 'page1' })">
            {{ header.link.page_1 }}
          </b-nav-item>
          <b-nav-item :to="localePath({ name: 'page2' })">
            {{ header.link.page_2 }}
          </b-nav-item>
          <b-nav-item :to="localePath({ name: 'page3' })">
            {{ header.link.page_3 }}
          </b-nav-item>
          <b-nav-item :to="localePath({ name: 'page4' })">
            page 4
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- {{availableLocales}}//*//
          {{header}} -->

          <b-nav-item-dropdown :text="`${header.lang}`" right>
            <b-dropdown-item
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              {{ locale.name }}
              {{ locale.code }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    path: 'Data',
  }),
  computed: {
    header() {
      return this.$t('header')
    },

    // function availableLocales จะเป็น function get locales ที่เรามีทั้งหมดมา
    availableLocales() {
      // console.log(this.$i18n.locales.filter(i => i.code));
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
