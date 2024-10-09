import Herocarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import { getAllProducts } from "@/lib/actions"
import ProductCard from "@/components/ProductCard"
import React from 'react'

const Home = async () => {
  const allProducts = await getAllProducts();
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Unleash Savvy Shopping
              <Image 
                src={'/assets/icons/conversation-svgrepo-com.svg'}
                alt='Arrow Right Icon'
                width={18}
                height={18}
              />
            </p>

            <h1 className="head-text">
              Empower your shopping journey with
              <span className="text-vibrant-coral"> SmartShoppers</span>
            </h1>

            <p className="mt-6 font-monts">
            Unlock potent, user-friendly product and growth analytics to enhance conversions, boost engagement, and maximize retention
            </p>
            <Searchbar /> 
          </div>
          <Herocarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Hot Now</h2>
        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {allProducts?.map((product) => (
            <ProductCard  
            key={product._id} 
            product={product}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home