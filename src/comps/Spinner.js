import React, { Component } from 'react'
import loading from './1488.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <div><img src={loading} alt="loading" height={'33px'} width={'33px'}/></div>
      </div>
    )
}

export default Spinner