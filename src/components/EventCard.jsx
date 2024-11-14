
function EventCard(){
    return(
        <div className="childTestBorder flex ">
            <div>
                <img className="eventCardImg" src="https://www.crmsoftwareblog.com/wp-content/uploads/help-g2d0b94a79_1920.jpg" alt="" />
            </div>
            <div className="flex flex-col">
                <h2>Event Title</h2>
                <p>Event Description</p>
            </div>
        </div>
    )
}

export default EventCard;
