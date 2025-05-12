import React from 'react'
import GeneralButton from './GeneralButton'
import { Link } from 'react-router-dom'
import './work.css'
import Scroll from './Scroll'
import WorkScroll from './assets/scroll2.gif'
import buildScroll from './assets/building.gif'

function Work() {
  return (
    <div className='work-screen'>
      <div className='hero-section'>
      <h1 className='first-header'> About my work</h1>
      <hr className='line-new'/>
      <p className='first-word'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam voluptatem delectus autem minus, sed eos incidunt quos corrupti odit quis, sint esse ipsam vero natus earum porro inventore rerum sunt similique, dignissimos nulla blanditiis nemo ad eius! Aliquid eveniet, architecto sapiente eum facilis debitis voluptate sit ea magni culpa, error nihil, velit nemo quisquam praesentium aut? Nulla facilis aspernatur culpa aut facere amet minus possimus. Exercitationem tempore iure reprehenderit! Consequatur, assumenda veniam cumque porro ipsa provident hic id ab maxime necessitatibus fuga esse laboriosam quibusdam alias eligendi. Odio, excepturi. Culpa assumenda voluptates, repellat incidunt alias consequuntur soluta eos nesciunt autem reiciendis suscipit, officiis unde. Obcaecati unde suscipit, cumque nisi, similique blanditiis sapiente possimus laborum labore quisquam facilis corrupti quis omnis magni animi libero dolor odit rem quo in quasi delectus aperiam nihil quod? Tempore nemo aut vitae dolore blanditiis excepturi id labore. Nisi ut, quam, molestias vero voluptatem tenetur eius a pariatur consequatur omnis asperiores. Quaerat dignissimos minus et mollitia, ea quos totam corporis, nam ipsam reprehenderit maxime repellat in distinctio possimus dolorem aut soluta sunt nesciunt alias recusandae, voluptas cumque maiores quia? Voluptates doloremque inventore beatae, autem asperiores error ipsa dolore, architecto vel necessitatibus laudantium eos, iure reprehenderit porro.</p>
    </div>
    
      <div className='second-section'>
        <div className='hero-word'>
        <h2>Purposeful Development</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fugiat aperiam numquam saepe earum distinctio autem voluptatum quos ab! Quisquam repellendus magni sint voluptate magnam deleniti exercitationem eos facere voluptates nisi modi fuga enim, molestiae esse dolorem iusto quaerat porro eius dicta illo tempora ratione sequi quas culpa. Soluta, quod? Illo ducimus hic error labore explicabo minima voluptas eligendi vitae dignissimos fugiat omnis beatae culpa magni repudiandae ex facilis aliquam deserunt voluptatum repellendus reiciendis eaque quis ratione, cum quidem! Doloribus obcaecati quis beatae consequuntur vero hic itaque. Porro, quia alias? Sit sunt nobis assumenda fuga repellat et nemo reiciendis repellendus!</p>
        </div>
        <div className='hero-image'>
          
        </div>
      </div>  
      <div><Scroll imgSrc={WorkScroll}/></div>
      <div className='fluid'>
        <h1 className='first-header'> Fluid Interfaces</h1>
        <p className='first-word'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non eligendi, animi commodi voluptates optio fuga reprehenderit nemo molestiae ad eaque saepe similique eum vitae corrupti maxime dignissimos! Maiores, accusantium deserunt, exercitationem, id deleniti quia ullam dicta explicabo ad eos molestias sequi repudiandae architecto alias doloribus minima a magni? Soluta cupiditate corporis, architecto impedit repellendus modi laudantium dignissimos recusandae inventore ipsum officiis, id maxime nam. Vel illum quibusdam temporibus id reiciendis?
        </p>
      </div>

      <div className='build'>
        <div className='img-build'><img src={buildScroll} style={{height:"500px"}} alt='construction Gif'/></div>
        <div className='build-text'>
        <h1> Let's Build Better</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, hic expedita, sunt ipsum voluptate veniam labore, tempore assumenda deserunt quibusdam doloribus. Adipisci omnis ducimus in sint maiores illum, enim quis optio provident alias fugit nihil cupiditate commodi eos aperiam asperiores, officiis magni! Amet ipsa quaerat debitis quod sint, in excepturi soluta delectus totam, quis aspernatur facilis cupiditate minima voluptatibus. Fugiat sit, in minima tempora temporibus soluta illum consectetur velit harum quam veritatis
          <b> nisi est incidunt nam magnam earum culpa omnis provident praesentium optio, sint quidem doloremque inventore deserunt. Quas, neque.</b>
        </p>
        </div>
        

    </div>
      <div className='work-button'>
        <div className='img-side'><Link to='/About'><GeneralButton className="button" buttonText="About" /></Link></div>
        </div>
    </div>
  )
}

export default Work
