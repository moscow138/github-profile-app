import React from 'react'
import './Repos.css'
import Profile from './profile'
import { ChakraProvider } from '@chakra-ui/react'

const Repo = () => {
    return (
        <div className='repos'>
            <div className='content'>
          <ChakraProvider>
          <Profile />
        </ChakraProvider>
            </div>
        </div>
    )
}

export default Repo
