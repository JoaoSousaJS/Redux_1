import { ReducerProps } from '../reducers/types/reducerType'
import { SelectSongs } from './types/selectSongTypes'

export const selectSong = (song: ReducerProps['selectedSong']): SelectSongs => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}
