// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

/**
 * Global components
 */
import Icon from "@/components/icons/Icon.vue"
import TokenSymbol from "@/components/icons/TokenSymbol.vue"
import Flex from "@/components/layout/Flex.vue"
import Text from "@/components/typography/Text.vue"
app.component("Icon", Icon)
app.component("TokenSymbol", TokenSymbol)
app.component("Flex", Flex)
app.component("Text", Text)

app.mount('#app')
