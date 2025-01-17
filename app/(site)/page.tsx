import {getPage} from '@/sanity/sanity-utils'
import {getBurgerMenu} from '@/sanity/sanity-utils'
import Link from 'next/link'
import BurgerMenu from './components/BurgerMenu'

export default async function Home() {
  const page = await getPage()
  const menu = await getBurgerMenu()

  console.log('/////////// page: ', page)

  return (
    <div className="min-h-screen ">
      <main className="">
        {/* <BurgerMenu /> */}
        <div>
          {page.components.map((component: any, index: number) => {
            if (component._type === 'hero') {
              return (
                <section key={index} className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${component.image?.asset?.url || ''})`}}>
                  <div className=" text-center text-gray-900 px-4">
                    <div className=" mb-10">
                      <h1 className="text-8xl font-bold mb-4">{component.title || 'Hero Title'}</h1>
                      <p className="text-4xl mb-6">{component.subtitle || 'Hero Subtitle'}</p>
                    </div>
                    <div className="flex justify-center gap-4">
                      <a href={component.button1?.url || '#'} className="px-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-800 transition">
                        {component.button1?.label || 'CTA 1'}
                      </a>
                      <a href={component.button2?.url || '#'} className="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition">
                        {component.button2?.label || 'CTA 2'}
                      </a>
                    </div>
                  </div>
                </section>
              )
            } else if (component._type === 'service') {
              return (
                <section key={index} className="py-12 bg-gray-100">
                  <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">{component.sectionTitle || 'Service Section Title'}</h2>
                    <p className="text-lg mb-8">{component.sectionSubtitle || 'Service Section Subtitle'}</p>
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
                    <div className="flex flex-wrap justify-center">
                      {component.serviceCards?.map((card: any, cardIndex: number) => (
                        <div className="w-1/3 p-2">
                          <div key={cardIndex} className=" bg-white rounded-lg shadow-md p-4 ">
                            <div className="text-center">
                              <img src={card.image?.asset?.url || ''} alt={card.title || ''} className="inline-block h-20 w-20 object-cover p-4" />
                              <h3 className="text-3xl font-semibold mb-2">{card.title || 'Card Title'}</h3>
                            </div>

                            <p className="text-sm text-gray-600">{card.description || 'Card Description'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )
            } else {
              return null
            }
          })}
        </div>

        <div className="p-4 rounded-md border-gray-100 bg-gray-50 border-2 mb-2">
          <Link href="/blog" className="text-blue-500 hover:text-blue-700 font-medium">
            {'>'} Go to Blog
          </Link>
        </div>
      </main>
    </div>
  )
}
