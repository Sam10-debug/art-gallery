import Image from "next/image"
import { motion,AnimatePresence  } from "framer-motion"

const Homep = () => {
  return (
	<AnimatePresence>
		<motion.section initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }} className="">
			<h2>Nike Art Gallery</h2>
			<section className="nike">
				<div  className="image-container">
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
				<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className=""><Image src="/images/Rectangle 88.png" width={80} height={80} alt="featured artistes" /></motion.div>
				<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className=""><Image src="/images/Rectangle 89.png" width={80} height={80} alt="featured artistes" /></motion.div>
				<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className=""><Image src="/images/Rectangle 148.png" width={80} height={80} alt="featured artistes" /></motion.div>
				<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className=""><Image src="/images/Rectangle 149.png" width={80} height={80} alt="featured artistes" /></motion.div>
				<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className=""><Image src="/images/Rectangle 150.png" width={80} height={80} alt="featured artistes" /></motion.div>
				<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className=""><Image src="/images/Rectangle 88.png" width={80} height={80} alt="featured artistes" /></motion.div>
				
			</div>
			<div className="ticket-div"><motion.button  whileHover={{ scale: 1.1 }}
		whileTap={{ scale: 0.9 }} className="ticket-btn">Book Tickets</motion.button></div>
			
		</motion.section>
	</AnimatePresence>
  )
}

export default Homep