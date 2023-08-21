import Image from 'next/image'
import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fetchCars } from '@/utils'
import { log } from 'console';
export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || '',
    model: searchParams?.model || '',
    fuel: searchParams?.fuel || '',
    year: searchParams?.year || 2023,
    limit: searchParams?.limit || 10,
  });  

  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars // if it is true our data will be empty



  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar/>
          <div className='home__filter-container'>
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            {/* WE HAVE CARS */}
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car}/>
              ))}

            </div>
          </section>
        ):(
          <div className='home__error-container'>
            <h3 className='text-black text-xl font-bold'>Ooops nor results</h3>
            <p>{allCars?.message}</p>
          </div>
        )}
        
      </div>
    </main>
  )
}
