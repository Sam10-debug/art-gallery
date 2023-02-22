import { DataGet } from '../components/DataContext/DataContext'
import Layout from '../components/Layout'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  
  return <DataGet><Layout><Component {...pageProps} /></Layout></DataGet>
}

export default MyApp
