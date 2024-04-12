import ImgOlimp from '../assets/images/oc-icon-colored.png'
import { Button } from '../components/button'

export function Home() {
  return (
    <div className="size-full container-center container-home">
      <img src={ImgOlimp} className='border-effect' />
      <Button to='/question'>Jogar</Button>
      <img src={ImgOlimp} className='border-effect' />
    </div>
  )
}