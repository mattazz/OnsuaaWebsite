/* eslint-disable react/prop-types */
const CircleImage = ({ src, width = 128, height = 128 }) => {
    return (
        <div className="flex lg:justify-start md:justify-center sm:justify-center justify-center w-1/2 ">
            <img
                src={src}
                alt=""
                style={{ width: `${width}px`, height: `${height}px` }}
                className={`flex rounded-full w-${width} h-${height} sm:w-${width * 1.5} sm:h-${height * 1.5} md:w-${width * 2} md:h-${height * 2}`}
            />
        </div>
    );
};

export default CircleImage