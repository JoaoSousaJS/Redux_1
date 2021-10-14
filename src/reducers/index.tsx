import { combineReducers } from 'redux'
import { SelectSongs } from '../actions/types/selectSongTypes'

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I want it that way', duration: '2:15' }
  ]
}

const selectedSongReducer = (selectedSong = null, action: SelectSongs) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
