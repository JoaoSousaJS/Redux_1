import { SelectSongs } from './types/selectSongTypes'

export const selectSong = (song: string): SelectSongs => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}
