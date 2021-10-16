import { ConnectedProps } from 'react-redux'
import { connector } from '../../reducers/songs'

const SongList = (props: ConnectedProps<typeof connector>) => {
  console.log(props)
  return <div>SongList</div>
}

export default connector(SongList)
