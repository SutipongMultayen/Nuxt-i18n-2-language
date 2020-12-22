<template>
  <div class="mt-3">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template v-slot:header>{{ title }}</template>

      <template v-slot:lead>
        {{ body }}
      </template>

      <hr class="my-4">

      <p>
        {{ footer }}
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Header'
    },
    body: {
      type: String,
      default: 'Body'
    },
    footer: {
      type: String,
      default: 'Footer'
    }
  }
}
</script>

