import Head from 'next/head'
import Homep from './comps/homep'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Nike Art Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homep />
    </div>
  )
}
