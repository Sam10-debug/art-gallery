import { motion,AnimatePresence  } from "framer-motion"
import Image from "next/image"

const Artists = () => {
  return (
	  <AnimatePresence>
		<motion.section initial={{ opacity: 0, scale: 0.5 }}
		animate={{ opacity: 1, scale: 1 }}
		transition={{ duration: 1.5 }} className="artists-section">
			<h4 className="artists-text">Artists</h4>
			<section className='first'>
				<div className='name-div'>Favour Akinyemi</div>
				<section className="anthony-div">
					<div className="lol">
						<Image src="/images/artists/Ellipse 16 (1).png"height={200} width={200}    />
					</div>
					<div className='artists-div'>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/Rectangle 51.png" height={200} width={200}/>
						</div>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/Rectangle 52.png" height={200} width={200}/>
						</div>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/Rectangle 51 (1).png" height={200} width={200}/>
						</div>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/Rectangle 58.png" height={200} width={200}/>
						</div>
					</div>
				</section>
			</section>
			<section className='first'>
				<div className='name-div'>Morenike Olusanya</div>
				<section className="anthony-div">
					<div className="lol">
						<Image src="/images/artists/second/Ellipse 17.png"height={200} width={200}    />
					</div>
					<div className='artists-div'>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/second/Rectangle 53.png" height={200} width={200}/>
						</div>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/second/Rectangle 54.png" height={200} width={200}/>
						</div>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/second/Rectangle 55.png" height={200} width={200}/>
						</div>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/second/Rectangle 56.png" height={200} width={200}/>
						</div>
					</div>
				</section>
			</section>
			<section className='first'>
				<div className='name-div'>Mayowa Alabi</div>
				<section className="anthony-div">
					<div className="lol">
						<Image src="/images/artists/third/Ellipse 17.png" height={200} width={200}    />
					</div>
					<div className='artists-div'>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/third/Rectangle 51 (1).png" height={200} width={200}/>
						</div>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/third/Rectangle 51 (2).png" height={200} width={200}/>
						</div>
						<div className="art-div">
						<Image className="imagee" src="/images/artists/third/Rectangle 51 (3).png" height={200} width={200}/>
						</div>
						<div className="art-div">
						<Image className="imagee" src="/images/artists/third/Rectangle 51 (4).png" height={200} width={200}/>
						</div>
					</div>
				</section>
			</section>
			<section className='first'>
				<div className='name-div'>Anthony Azekwoh</div>
				<section className="anthony-div">
					<div className="lol">
						<Image src="/images/artists/fourth/Ellipse 17.png" height={200} width={200}    />
					</div>
					<div className='artists-div'>
						<div className="art-div">
							<Image className="imagee" src="/images/artists/fourth/Rectangle 51 (1).png" height={200} width={200}/>
						</div>
						<div className="art-div">
							<Image src="/images/artists/fourth/Rectangle 51 (2).png" className="imagee" height={200} width={200}/>
						</div>
						<div className="art-div">
						<Image src="/images/artists/fourth/Rectangle 51 (3).png" className="imagee" height={200} width={200}/>
						</div>
						<div className="art-div">
						<Image src="/images/artists/fourth/Rectangle 50.png" className="imagee" height={200} width={200}/>
						</div>
					</div>
				</section>
			</section>
		</motion.section>
	</AnimatePresence>
  )
}

export default Artists