import search from '../.././assets/search.jpg'
import giotto from '../.././assets/giotto.jpg'
import foods from '../.././assets/foods.jpg'
import noteapp from '../.././assets/noteapp.png'
import xurmo from '../.././assets/xurmo-market.png'
import auction from '../.././assets/auction.png'
import smartbooks from '../.././assets/smartbooks.png'

import { Link } from "react-router-dom"
const Experience = () => {
  return (
    <div className="p-20 max-lg:p-10 max-md:p-5 grid grid-cols-2 max-lg:grid-cols-1 gap-20">
     
     <div className="border border-orange-500 rounded p-10">
        
      <img className="w-3/4 h-3/4 rounded-lg " src={foods} alt="" />
      <button className="bg-orange-500 p-2 rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://dainty-horse-44700e.netlify.app/'}>Ko&apos;rish</Link></button>
     </div>
     <div className="border border-orange-500 rounded p-10">
        
      <img className="w-3/4 h-3/4 rounded-lg" src={giotto} alt="" />
      <button className="bg-orange-500 p-2 rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://giotto1.netlify.app/'}>Ko&apos;rish</Link></button>
     </div>
     <div className="border border-orange-500 rounded p-10">
        
      <img className="w-3/4 h-3/4 rounded-lg" src={noteapp} alt="" />
      <button className="bg-orange-500 p-2 rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://note2-app.vercel.app/'}>Ko&apos;rish</Link></button>
     </div>
     <div className="border border-orange-500 rounded p-10">
        
      <img className="w-3/4 h-3/4 rounded-lg" src={xurmo} alt="" />
      <button className="bg-orange-500 p-2 rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://note2-app.vercel.app/'}>Ko&apos;rish</Link></button>
     </div>
      
     <div className="border border-orange-500 rounded p-10">
        
      <img className="w-3/4 h-3/4 rounded-lg" src={auction} alt="" />
      <button className="bg-orange-500 p-2 rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://client-auction-hub.vercel.app/'}>Ko&apos;rish</Link></button>
     </div>
      
     <div className="border border-orange-500 rounded p-10">
        
      <img className="w-3/4 h-3/4 rounded-lg" src={smartbooks} alt="" />
      <button className="bg-orange-500 p-2 rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://smart-books.netlify.app/'}>Ko&apos;rish</Link></button>
     </div>
      
    </div>
  )
}

export default Experience
