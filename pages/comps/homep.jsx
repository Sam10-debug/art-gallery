import Image from "next/image"

const Homep = () => {
  return (
	<section className="">
		<h2>Nike Art Gallery</h2>
		<section className="nike">
			<div className="image-container">
				<Image className="image" src="/images/Rectangle 47.png" objectFit="contain" alt="hero-picture" layout="fill" />
			</div>
			<div>
				<div className="web-btn">
					<button>Website</button>
					<button>Directions</button>
					<button>Calls</button>
					<button>Reviews</button>
					<button>Save</button>
				</div>
				<p><span>Address:</span> 2 Oba Yekini Elegushi Rd, Lekki Phase I 106104, Lekki.</p>
				<p>Hours: <a href="#">Open </a>. Closes 6PM</p>
				<h4 className="about">About</h4>
				<p className="art-text">Nike Art Gallery is an art gallery in Lagos and Osun state owned by Nike Davies-Okundaye. The gallery is one of the largest of its kind in West Africa, it boasts a collection of about 8,000 diverse artworks from various Nigerian artists like Chief Josephine Oboh Macleod. The Lagos gallery is in a five-storey tall building.</p>
			</div>
		</section>
		<h3>Featured Artistes</h3>
		<div className="img-rack">
			<div className=""><Image src="/images/Rectangle 88.png" width={80} height={80} alt="featured artistes" /></div>
			<div className=""><Image src="/images/Rectangle 89.png" width={80} height={80} alt="featured artistes" /></div>
			<div className=""><Image src="/images/Rectangle 148.png" width={80} height={80} alt="featured artistes" /></div>
			<div className=""><Image src="/images/Rectangle 149.png" width={80} height={80} alt="featured artistes" /></div>
			<div className=""><Image src="/images/Rectangle 150.png" width={80} height={80} alt="featured artistes" /></div>
			<div className=""><Image src="/images/Rectangle 88.png" width={80} height={80} alt="featured artistes" /></div>
			
		</div>
		<div className="ticket-div"><button className="ticket-btn">Book Tickets</button></div>
		
	</section>
  )
}

export default Homep