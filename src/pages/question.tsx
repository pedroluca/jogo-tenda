import { useState, useEffect } from 'react'
import { questions } from '../data/questions'
import { Button } from '../components/button'
import LogoOlimp from '../assets/images/logo-olimp.png'

interface QuestionType {
  indexCorrect: number,
  title: string,
  alternativa: string[]
}

export function Question() {
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState('')
  const [question, setQuestion] = useState<QuestionType | null>(null)

  useEffect(() => {
    if (Array.isArray(questions)) {
      const randomIndex = Math.floor(Math.random() * questions.length)
      setQuestion(questions[randomIndex])
    }
  }, [])

  const handleClick = (index: number) => {
    if (question && index === question.indexCorrect) {
      setMessage('Resposta correta, parabéns!')
    } else {
      setMessage('A resposta está incorreta! A resposta certa é: ' + question?.alternativa[question.indexCorrect])
    }
    setShowModal(true)
  }

  useEffect(() => {
    const originalBackground = document.documentElement.style.background
    document.documentElement.style.background = 'linear-gradient(45deg, rgba(255,102,0,1) 0%, rgba(153,0,204,1) 100%)'
    return () => {
      document.documentElement.style.background = originalBackground
    }
  }, [])

  return (
    <div className='size-full container-center'>
      <div className='container-center container-question border-effect'>
        {question ? (
          <>
            <img src={LogoOlimp} className='logo-olimp' />
            <h1>{question.title}</h1>
            <div className='select-holder'>
              {question.alternativa.map((option, index) => (
                <Button to='' role='button' className='button-select' onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                  event.preventDefault()
                  handleClick(index)
                }}>{option}</Button>
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {showModal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <p>{message}</p>
            <Button to='/' id="modalBtn" onClick={() => setShowModal(false)}>OK</Button>
          </div>
        </div>
      )}
    </div>
  )
}