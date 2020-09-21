import { defineComponent } from 'vue'

interface CounterInfo {
  counter: number
  info: {
    name: string
    version: string
  }
}

export const Counter = defineComponent({
  data(): CounterInfo {
    return {
      counter: 0,
      info: {
        name: 'Counter',
        version: '3.0',
      },
    }
  },
  mounted() {},
  render() {
    return (
      <div>
        {`${this.info.name}(${this.info.version})`}:{this.counter}
      </div>
    )
  },
})
