import Header from './header.jsx'
import Hero from './hero.jsx'
import Features from './features.jsx'
import Services from './services.jsx'
import Reviews from './reviews.jsx'
import Location from './location.jsx'
import Footer from './footer.jsx'

const home = () => {
  return (
    <div className='w-full flex flex-col'>
      <div><Header /></div>
      <div><Hero /></div>
      <div id='Feature'><Features /></div>
      <div id='Service'><Services /></div>
      <div id='Review'><Reviews /></div>
      <div id='Location'><Location /></div>
      <div><Footer /></div>
  </div>
  )
}

export default home
