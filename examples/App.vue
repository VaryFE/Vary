<template>
  <div id="app" :class="{ 'is-component': isComponentPage }">
    <Header v-if="lang !== 'play'"></Header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <Footer v-if="lang !== 'play' && !isComponentPage"></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

@Component({
   components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
    get lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
    }
    
    get isComponentPage() {
        return /^component/.test((this.$route as any).name);
    }
}
</script>
