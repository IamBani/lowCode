import { defineStore } from 'pinia'

interface State {
  userList: number[]
  user: string | null
}
export default defineStore('user', {
  state(): State {
    return {
      user: '112',
      userList: [1, 2, 3, 4],
    }
  },
  actions: {
    getUserList(): number[] {
      return this.userList
    },
  },
})
