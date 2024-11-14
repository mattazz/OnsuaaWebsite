
function EventCard(){
    return(
        <div className="flex-col flex w-full md:flex-row rounded-md shadow-xl gap-2">
            <div className="w-full">
                <img className="eventCardImg rounded-tl-md rounded-bl-md" src="https://www.crmsoftwareblog.com/wp-content/uploads/help-g2d0b94a79_1920.jpg" alt="" />
            </div>
            <div className="flex flex-col w-full gap-3  pt-3">
                <h1>Event Title</h1>
                <p className="italic">Event date</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto magni error assumenda exercitationem, beatae minima enim incidunt rem nobis accusantium quod, reiciendis consectetur. </p>
            </div>
        </div>
    )
}

export default EventCard;
