import Navigation from '@/components/navigation/navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/footer'
import { getDictionary } from '@/lib/getDictionary'
import { title } from 'process'
import siteConfig from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

/* STATIC METADATA */
/* export const metadata: Metadata = {
  title: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and citiest around the world!",
}; */

export const generateMetadata = async ({params: { lang },}: {params: { lang: string };}) => {
  // Get the Dicitionary based on Lang
  const dicitionary = await getDictionary(lang);

  return{
    title : {
      template: "%s | " + siteConfig.siteName,
      default: siteConfig.siteName,
    },
    description: dicitionary.footer.description,
    openGraph: {
      title: siteConfig.siteName,
      description: dicitionary.footer.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}`,
      siteName: siteConfig.siteName,
      images: [
        {
          url:`${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`,
          width: 1200,
          height: 628,
        },
        {
          url:`${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.png`, // small image
          width: 800,
          height: 600,
        },
      ],
      authors: ['Umanda Jayobandara'],
      locale: lang,
      type: "website",
    },
  }
}


export default function RootLayout({
  children,
  params : {lang}
}: {
  children: React.ReactNode,
  params : {lang : string}
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navigation locale={lang} />
        <div className="pt-10 min-h-[calc(100vh-300px)]">{children}</div>
        <Footer locale={lang}  />
      </body>
    </html>
  )
}
