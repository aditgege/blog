<template>
  <section class="pages">
    <div
      v-for="portofolio in portofolios"
      :key="portofolio.title"
      class="pages__item">
      <nuxt-link
        :to="`/${portofolio.slug}`"
        class="pages__link">
        <h2 class="pages__title">
          {{ blportofolioog.title }}
        </h2>
      </nuxt-link>
      <div class="meta">
        <small class="meta__date">{{ formatPostDate(portofolio.date) }}</small>
        <small class="dot"> • </small>
        <small class="meta__read">{{ formatReadingTime(portofolio.minute2read) }}</small>
      </div>
      <div>
        <p>
          {{ portofolio.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Portofolio from '../contents/portofolio.js'
import { formatReadingTime, formatPostDate } from '../utils/helper.js'
export default {
  name: 'Homepage',
  data () {
    return {
      formatReadingTime,
      formatPostDate
    }
  },
  async asyncData ({ store }) {
    async function asyncImport (portofolioName) {
      const allMarkdown = await import(`~/contents/markdown/${portofolioName}/index.md`)
      return allMarkdown.attributes
    }
    return Promise.all(Portofolio.map(portofolio => asyncImport(portofolio)))
      .then((res) => {
        return {
          portofolios: res
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.pages {
  &__title {
    margin-bottom: .25em;
  }
  &__date {
    color: var(--textSubtitle);
  }
}
</style>
