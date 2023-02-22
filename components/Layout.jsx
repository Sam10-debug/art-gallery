
import { useData } from './DataContext/DataContext'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
	const {SHow,hamburgerRef}= useData()
  return (
	<div className='div-body'>
		<div ref={hamburgerRef} onClick={SHow} className="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>
		<Nav />
		{children}
		<Footer />
	</div>
  )
}

export default Layout