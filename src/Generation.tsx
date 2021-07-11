import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGeneration, changeGeneration } from './store/generation'

const GenerationPage: React.VFC = () => {
  const generation = useSelector(selectGeneration)
  const dispatch = useDispatch()

  return (
    <div>
      <button type='button' onClick={() => dispatch(changeGeneration('First'))}>
        First Generation
      </button>
      <button
        type='button'
        onClick={() => dispatch(changeGeneration('Second'))}
      >
        Second Generation
      </button>
      <button
        type='button'
        onClick={() => dispatch(changeGeneration('Third'))}
      >
        Third Generation
      </button>
      <div>Generation is {generation}</div>
    </div>
  )
}

export default GenerationPage
