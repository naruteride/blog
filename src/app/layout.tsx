import './globals.css'
import type { Metadata } from 'next'
import { Noto_Serif_KR } from 'next/font/google'
import Image from "next/image";
import BackgroundImage from "../../public/images/background-blur.svg"
import Header from '@/app/component/Header';
import Navigator from '@/app/component/Navigator';
import Profile from '@/app/component/Profile';

const noto_serif_KR = Noto_Serif_KR({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '방성훈 블로그',
  description: '방성훈 블로그',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={noto_serif_KR.className}>
        <Header />
        <Navigator />
        {children}
        <Profile />
        <div id="background">
          <Image src={BackgroundImage} width={559} height={456} alt='background image' />
        </div>
      </body>
    </html>
  )
}
