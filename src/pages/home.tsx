import ImgOlimp from '../assets/images/oc-icon-colored.png'
import { Button } from '../components/button'

export function Home() {
  return (
    <div className="size-full container-center container-home">
      <img src={ImgOlimp} />
      <h1 className='main-title'>Quiz</h1>
      <Button to='/question' className='button-orange'>Jogar</Button>
    </div>
  )
}