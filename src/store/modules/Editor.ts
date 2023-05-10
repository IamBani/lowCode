import { defineStore } from 'pinia'

import { v4 as uuidv4 } from 'uuid'

export interface EditorProps {
  components: ComponentData[]
  currentElement: string
}

interface ComponentData {
  props: { [key: string]: any }
  id: string //uuid
  name: string
}
export const useEditor = defineStore('editor', {
  state() {
    return {
      id: uuidv4(),
    }
  },
  actions: {},
})
