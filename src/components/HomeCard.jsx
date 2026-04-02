import React from 'react'
import Card from './Card'

function HomeCard() {
  return (
   <>
   <div className="max-w-[90%] lg:max-w-5xl mx-auto font-jost text-center my-20">
      <h1 className="text-2xl">Recommend Lesson</h1>
      <p className="italic">Explore with modern programming language</p>
      <Card/>
    </div>

   

   </>
  )
}

export default HomeCard