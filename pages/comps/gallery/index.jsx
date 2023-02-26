import Image from 'next/image'
import { motion,AnimatePresence  } from "framer-motion"

const Gallery = () => {
  return (
	<motion.section layout initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}>
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
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 58.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
			<motion.div  animate={{ x: 0 }}  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="">
				<Image src="/images/Rectangle 50.png" width={150} height={150} alt="curated picks" />
				<div className="amanda-text">
					<span className=''>Amanda</span>
					<span className=''>by Adriana Geo</span>
				</div>
			</motion.div>
		</section>
	</motion.section>
  )
}

export default Gallery