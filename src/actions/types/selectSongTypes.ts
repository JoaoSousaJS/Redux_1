export type SelectSongs = {
  type: string
  payload: {
    title: string
    duration: string
  } | null
}
