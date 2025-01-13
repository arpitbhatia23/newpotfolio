import React from 'react'
import { Card, CardContent, CardDescription } from './ui/card'

const Code = () => {
  return (

      <Card className='bg-neutral-800 text-white  p-8 border min-w-80 border-neutral-700 relative w-full   '>
        <CardContent>
            <CardDescription className="text-white">
        <pre className='text-xs sm:text-sm md:text-base text-left'>
            <div>
              <span className='text-blue-400'>const</span>{" "}<span className='text-purple-400'>developer </span>= {' '}
              {"{"} 
              {'\n'} name: {''}<span className='text-green-400'>'Aurpit Bhatia'</span>,
              {'\n'} role:{''} <span className='text-green-400'>'mern stack dev'</span>,
              {'\n'} skills:{''}[<span className='text-green-400'>'MongoDB'</span>,<span className='text-green-400'>'Express'</span>,<span className='text-green-400'>'React'</span>,{'\n'}
              {'          '}
              <span className='text-green-400'>'Node.js'</span>],
              {'\n'}passion:{''}
              <span className='text-green-400'>'Building awesome web apps'</span>
              {'\n'}{'};'}
            </div>


        </pre>
        </CardDescription>
        </CardContent>
      </Card>
  )
}

export default Code
