<script lang="tsx">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const num = ref('111')
    return () => {
      return <>{num.value}</>
    }
  },
})
</script>
