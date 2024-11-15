import {motion} from 'framer-motion'

// eslint-disable-next-line react/prop-types
function SocialIcon({ imgPath, altText, link }) {
    return (
        <motion.div
            initial = {{scale: 0}}
            animate = {{scale: 1}}
            whileHover={{scale: 1.1}}
        >
            <a href={link} target="_blank" rel="noopener noreferrer" >
                <img src={imgPath} alt={altText} className="w-8 h-8" />
            </a>
        </motion.div>
    )
}

export default SocialIcon;