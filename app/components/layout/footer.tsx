import React from 'react'
import PaddingContainer from './padding-container'
import siteConfig from "@/config/site";
import Link from 'next/link';
import SocialLink from '../elements/social-link';
import { getDictionary } from '@/lib/getDictionary';
const Footer  = async ({locale} : {locale : string}) => {

    const dictionary = await getDictionary(locale);
    return (
        <div className="py-8 mt-10 border-t">
            <PaddingContainer>
                <div>
                    <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
                    <p className="max-w-md mt-2 text-lg text-neutral-700">
                    {dictionary.footer.description}
                    </p>
                </div>
                <div className="flex flex-wrap justify-between gap-4 mt-6">
                    <div>
                        <div className="text-lg font-medium">#exploretheworld</div>
                        <div className="flex items-center gap-3 mt-2 text-neutral-600">
                            <SocialLink link={siteConfig.socialLinks.twitter} platform='twitter'/>
                        
                            <SocialLink link={siteConfig.socialLinks.instagram} platform='instagram'/>
                
                            <SocialLink link={siteConfig.socialLinks.github} platform='github'/>
                       
                            <SocialLink link={siteConfig.socialLinks.youtube} platform='youtube'/>
                        
                            <SocialLink link={siteConfig.socialLinks.linkedin} platform='linkedin'/>

                            <SocialLink link={siteConfig.socialLinks.facebook} platform='facebook'/>
                        </div>
                    </div>
                    <div>
                        <div className="text-sm text-neutral-400">
                            {dictionary.footer.currentlyAtText}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            {siteConfig.currentlyAt}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 py-3 mt-16 border-t">
          <div className="text-sm text-neutral-400">
            {dictionary.footer.rightsText} {new Date().getFullYear()}
          </div>
          <div className="text-sm">
          {dictionary.footer.creatorText}{" "}
            <Link   
              className="underline underline-offset-4"
              href="https://twitter.com/umandajayo"
            >
              @umandajayo
            </Link>
          </div>
        </div>
            </PaddingContainer>
        </div>
    )
}

export default Footer