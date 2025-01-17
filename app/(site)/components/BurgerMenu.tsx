import React from 'react'
import {getBurgerMenu} from '@/sanity/sanity-utils'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default async function BurgerMenu({}: Props) {
  const menu = await getBurgerMenu()
  console.log('/////////// menu: ', menu)

  return (
    <div className=" w-full bg-white shadow-sm">
      <div className=" ">
        <Link href="/">
          <Image
            src={menu.logo.asset.url}
            alt="Logo"
            width={100} // Sostituisci con le dimensioni desiderate
            height={100} // Sostituisci con le dimensioni desiderate
            className="object-cover rounded-lg"
          />
        </Link>
        <nav>
          {menu?.links?.map(({link}: any) => (
            <div className="text-gray-900 me-2 text-lg font-bold">
              {/* {console.log('//////// link: ', link)} */}
              <Link href={link.slug} className="text-gray-900 me-2 text-lg font-bold z-100">
                {link.lable}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}
