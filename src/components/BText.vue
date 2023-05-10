<template>
  <component :is="tag" :style="styleProps">{{ text }}{{ url }}</component>
</template>

<script lang="ts">
import { pick } from 'lodash-es'
import { computed, defineComponent } from 'vue'
import {
  textDefaultProps,
  textStylePropNames,
  transFormToComponentProps,
} from '@/type/defaultProps'
transFormToComponentProps(textDefaultProps).url
export default defineComponent({
  props: {
    ...transFormToComponentProps(textDefaultProps),
    tag: {
      type: String,
      default: 'div',
    },
  },
  name: 'BText',
  setup(props) {
    console.log(props)
    const styleProps = computed(() => pick(props, textStylePropNames))
    return {
      styleProps,
    }
  },
})
</script>
<style lang="less" scoped></style>
