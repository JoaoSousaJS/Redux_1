import { ConnectedProps } from 'react-redux'
import { connector } from '../../reducers/songs'

const SongList = (props: ConnectedProps<typeof connector>) => {
  const renderList = () => {
    return props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }
  return <div className="ui divided list">{renderList()}</div>
}

export default connector(SongList)
