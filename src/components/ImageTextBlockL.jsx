function ImageTextBlockL(imgSrc, imgAlt="image", text){
    return(
        <div className="flex flex-row flex-wrap sm:p-0 sm:m-1  p-3 lg:my-5 gap-1 childTestBorder align-middle justify-center ">
                <div className="flex w-full sm:w-full  lg:w-1/3 justify-center align-middle m-auto  ">
                    <img src={imgSrc} alt={imgAlt} />
                </div>
                <div className="flex w-full sm:w-full sm:p-5  lg:w-1/2  ">
                    <p className="flex justify-center align-middle m-auto"
                    >{text}</p>
                </div>
            </div>
    )

}

export default ImageTextBlockL;