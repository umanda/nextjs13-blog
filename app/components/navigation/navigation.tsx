import Link from 'next/link'
import React from 'react'
import PaddingContainer from '../layout/padding-container'
import { getDictionary } from '@/lib/getDictionary'

const Navigation = async ({locale} : {locale : string}) => {

  const dictionary = await getDictionary(locale);

  return (
    <div className='sticky top-0 z-[999] left-0 right-0 bg-white bg-opacity-50 border-b backdrop-blur-mds'>
      <PaddingContainer>
        <div className='py-6 flex items-center justify-between '>
          <Link className="text-lg font-bold" href={`/${locale}`}>
            Explorer
          </Link>
          <nav>
            <ul className='flex items-center gap-4 text-neutral-600'>
              <li>
                <Link href={`/${locale}/cities`}>{dictionary.navigation.links.cities}</Link>
              </li>
              <li>
                <Link href={`/${locale}/experiences`}>{dictionary.navigation.links.experience}</Link>
              </li>
            </ul>
          </nav>
        </div>

      </PaddingContainer>
    </div>
  )
}

export default Navigation