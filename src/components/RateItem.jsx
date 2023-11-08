import React from 'react'

function RateItem({val, ...rest}) {
  return (
    <li {...rest}>{val}</li>
  )
}

export default RateItem