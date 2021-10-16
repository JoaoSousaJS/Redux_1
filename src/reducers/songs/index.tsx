import { connect } from 'react-redux'
import { ReducerProps } from '../types/reducerType'

const mapStateToProps = (state: ReducerProps) => {
  return { songs: state.songs }
}

export const connector = connect(mapStateToProps)
