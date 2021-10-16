export type ReducerProps = {
  selectedSong: {
    title: string
    duration: string
  } | null
  songs: {
    title: string
    duration: string
  }[]
}
