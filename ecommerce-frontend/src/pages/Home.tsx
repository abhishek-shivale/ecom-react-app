import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card.tsx'

function Home() {
  const handle = () =>{

  }
  return (
    <div className='home'>
      <section>

      </section>
      <h1>
        Latest Product
        <Link to={'/search'} className='findmore'>More</Link>
      </h1>
      <main>
      <ProductCard productId={'asdsa'} photo={'https://m.media-amazon.com/images/I/71eXNIDUGjL._AC_UY218_.jpg'} name='macbook' price={127} stock={1232} handler={handle} />
      </main>
    </div>
  )
}

export default Home