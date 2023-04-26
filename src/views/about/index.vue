<script lang="tsx">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  setup() {
    const name = ref('strng')
    const s = computed(() => {
      return name.value + 'sbw'
    })
    return () => (
      <>
        hell{name.value}
        {s.value}
      </>
    )
  },
})
</script>
