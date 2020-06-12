<template>
  <div>
    <pageHeader />
    <main class="main">
      <nuxt />
    </main>
    <pageFooter />
  </div>
</template>

<script>
import PageHeader from "./layout/header.vue";
import PageFooter from "./layout/footer.vue";

export default {
  head() {
    return {
      script: [
        {
          src:
            "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
        }
      ],
      link: [
        {
          rel: 'script',
          href: 'js/common.js'
        }
      ]
    };
  },
  components: {
    PageHeader,
    PageFooter
  }
};
</script>
