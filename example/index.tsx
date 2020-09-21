import { createApp } from 'vue'
import { Hello, Counter } from '@lib'
import './style.css'

const app = createApp({
  render() {
    return (
      <div class='container'>
        <Hello />
        <Counter />
      </div>
    )
  },
})

app.mount('body')
