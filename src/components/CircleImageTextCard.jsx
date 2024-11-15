/* eslint-disable react/prop-types */
import CircleImage from "./CircleImage";

function CircleImageWithTextCard({ src, headerText }) {
    return (
        <>
            <div className="card-container bg-white  rounded-lg p-6 max-w-sm mx-auto m-0 sm:text-center ">
                <CircleImage src={src} className="" />
                <h2 className="lg:text-left text-2xl font-bold mt-8 mb-4 sm:text-center text-center ">{headerText}</h2>
                <p className="text-base lg:text-left sm:text-center text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias esse exercitationem deleniti saepe quaerat repellendus accusamus recusandae nulla, officia architecto, facere vitae ea maxime cupiditate accusantium dolore est delectus fugit?</p>
            </div>
        </>
    )
}

export default CircleImageWithTextCard;