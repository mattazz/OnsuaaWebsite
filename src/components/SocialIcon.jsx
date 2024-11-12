// eslint-disable-next-line react/prop-types
function SocialIcon({ imgPath, altText, link }) {
    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer" >
                <img src={imgPath} alt={altText} className="w-8 h-8" />
            </a>
        </div>
    )
}

export default SocialIcon;