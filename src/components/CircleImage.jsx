/* eslint-disable react/prop-types */
const CircleImage = ({ src, width = 128, height = 128 }) => {
    return (
        <img
            src={src}
            alt=""
            style={{ width: `${width}px`, height: `${height}px` }}
            className={`rounded-full w-${width} h-${height} sm:w-${width * 1.5} sm:h-${height * 1.5} md:w-${width * 2} md:h-${height * 2}`}
        />
    );
};

export default CircleImage