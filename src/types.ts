export type Post = {
  id: number
  title: string
}

export type HookReturnType = { data: Post[] | undefined; isLoading: boolean }
