import React from 'react'
import './About.css'
import Godown from './assets/scroll4.gif'
import Laptop from './assets/laptop.jpg'
import Language from './assets/lan.jpg'

function About() {
  return (
    <div className='about'>
    <div className='about-header'>
      <h1> About My Work</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eum repellat dolores ad illum repudiandae eveniet obcaecati ex nemo commodi excepturi eaque amet qui voluptate fugiat est sunt molestias nihil voluptatum, repellendus suscipit. Odit iure animi illo delectus unde voluptatibus. Itaque eaque harum eligendi, velit, sit facilis cum, libero similique mollitia tenetur repudiandae facere commodi ipsa corrupti iusto culpa quis.
      </p>
      <div className='gif-image'> <img src={Godown} /> </div>
    </div>
    
    
    <div className='about-body'>
      <div className='about-message'>
      <h1> More About Me </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ad eos explicabo molestiae illum laborum iusto voluptatibus minima commodi mollitia! Exercitationem quia explicabo ipsum fugiat nemo, quod odio, consequatur, consequuntur sed aperiam optio. Culpa numquam harum aut doloremque voluptatibus deserunt repellat, dolorem natus asperiores dicta ad ea soluta error aliquid, hic unde quas, minus ducimus laudantium doloribus saepe? Labore aliquid delectus repellat animi numquam, ducimus suscipit laboriosam. Neque quia laboriosam at earum impedit, sed ab officiis repellat excepturi quod eveniet ipsam eos ad in dolor. Eius ipsum amet quidem eum earum, mollitia hic voluptas dicta deserunt adipisci officia quisquam. Reiciendis.
      </p>
      </div>
        <div className='about-image'> <img src={Laptop} alt='Working-image' style={{height:"400px"}} /> </div>
    </div>
    
      <div className='body-down'>
        <div className='down-img'>
          <img src={Language} alt='Working-image' style={{height:"400px"}} />
        </div>
        <div className='down-content'>
          <h1> Lover of Languages</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsam tenetur nostrum, accusamus, dignissimos sint voluptas temporibus totam, laborum magni tempore commodi aliquid id corporis blanditiis. Adipisci architecto veniam consequatur nemo at. Necessitatibus dicta consequuntur velit praesentium iure repellendus sapiente cum, voluptas sit odio iusto consequatur, mollitia dolores accusamus sunt hic omnis fuga sint distinctio consectetur incidunt culpa, magnam sed. Quisquam quis distinctio ullam laudantium sed veniam voluptatem repudiandae, voluptates magnam officia voluptatum dolorem reprehenderit ducimus sit deserunt excepturi illo atque delectus architecto autem cupiditate! Id ullam aspernatur in itaque esse, consequatur, voluptate officia animi harum iste quod perferendis sit!
          </p>
        </div>
    </div>
    </div>
  )
}

export default About
