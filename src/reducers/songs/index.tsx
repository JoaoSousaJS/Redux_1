import { connect } from 'react-redux'
import { selectSong } from '../../actions'
import { ReducerProps } from '../types/reducerType'

const mapStateToProps = (state: ReducerProps) => {
  return { songs: state.songs }
}

export const connector = connect(mapStateToProps, {
  selectSong
})
