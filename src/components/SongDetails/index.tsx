import { ConnectedProps } from 'react-redux'
import { connector } from '../../reducers/songs'

const SongIndex = ({ selectedSong }: ConnectedProps<typeof connector>) => {
  return (
    <div>
      <h3>Details for:</h3>
      {selectedSong && (
        <p>
          Title: {selectedSong.title}
          <br />
          duration: {selectedSong.duration}
        </p>
      )}
    </div>
  )
}

export default connector(SongIndex)
