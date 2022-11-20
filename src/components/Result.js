import React from 'react'
import './Result.css'

const Result = ({score,question}) => {
    // alert(question)
  return (
    <div className="maink">

        <div className="container">
     <h1 className='first'>{score <= 2 ? 'You Lose' :"You win"}</h1>
       <h3 className='center'>Your Score is {score} out of {question}</h3>
       

       <h3>Thank you visit again</h3>
       </div>

        
    </div>
  )
}

export default Result