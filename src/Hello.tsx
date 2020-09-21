import { withModifiers, defineComponent, ref } from 'vue'

export const Hello = defineComponent({
  setup() {
    const count = ref(0)

    const inc = () => {
      count.value++
    }

    return () => (
      <div>
        <h1>Hello World!</h1>
        <h2>Counter: {count.value}</h2>
        <button onClick={withModifiers(inc, ['self'])}>inc</button>
      </div>
    )
  },
})
