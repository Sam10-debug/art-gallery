import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
	<section>
		<h3 className='discover'>Get to discover art galleries near your location 
		and book visiting tickets.</h3>
		<div className="uffizzi">
			<div className="uffizzi-div">
				<div className="">
					<h5>The Floirence Uffizzi Gallery</h5>
					<h6>Tuscany, Italy</h6>
				</div>
				<div className="">
					<h5>9am-11pm</h5>
					<h6>4.7 rating</h6>
				</div>
			</div>
		</div>
		<h5 className='curated-picks'>Curated Picks</h5>
		<section className="curated-divs">
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 58.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
			<div className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</div>
		</section>
	</section>
  )
}

export default Gallery