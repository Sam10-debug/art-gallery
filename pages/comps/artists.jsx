import React from 'react'
import Image from "next/image"

const Artists = () => {
  return (
	<section className="">
		<h4 className="">Artists</h4>
		<section className='first'>
			<div className='name-div'>Favour Akinyemi</div>
			<section>
				<div className="img-container">
					<Image src="/images/artists/Ellipse 16 (1).png"  layout="fill"  />
				</div>
				<div className='artists-div'>
					<div>
						<Image src="/images/artists/Rectangle 51.png" height={200} width={200}/>
					</div>
					<div>
						<Image src="/images/artists/Rectangle 52.png" height={200} width={200}/>
					</div>
					<div>
						<Image src="/images/artists/Rectangle 51 (1).png" height={200} width={200}/>
					</div>
					<div>
						<Image src="/images/artists/Rectangle 58.png" height={200} width={200}/>
					</div>
				</div>
			</section>
		</section>
	</section>
  )
}

export default Artists