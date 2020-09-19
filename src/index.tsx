import { createApp } from 'vue'
import Hello from './Hello'

const app = createApp({
  render() {
    return <Hello />
  },
})

app.mount('#demo')
