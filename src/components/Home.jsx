import CircleImageWithTextCard from './CircleImageTextCard';
import Footer from './Footer';
import ImageTextBlockL from './ImageTextBlockL';
import ImageTextBlockR from './ImageTextBlockR';
CircleImageWithTextCard
function Home() {
    return (
        <>
            <div>
                <div id='header-banner' className=' m-6'>
                    <img src="https://onsuaa.wordpress.com/wp-content/uploads/2013/02/oathtaking.jpg"
                        className="w-8/12 m-auto rounded-xl" />
                </div>
                <div className=' m-4 pt-5 '>
                    <h1 className='text-center text-4xl mb-4 '>This is what we do</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:mx-24 ">
                        <CircleImageWithTextCard
                            src={"https://onsuaa.wordpress.com/wp-content/uploads/2013/02/oathtaking.jpg"}
                            headerText={"We're efficient."}
                        />
                        <CircleImageWithTextCard
                            src={"https://onsuaa.wordpress.com/wp-content/uploads/2013/02/oathtaking.jpg"}
                            headerText={"We're far-reaching."} />
                        <CircleImageWithTextCard
                            src={"https://onsuaa.wordpress.com/wp-content/uploads/2013/02/oathtaking.jpg"}
                            headerText={"We're locally led."} />
                        <CircleImageWithTextCard
                            src={"https://onsuaa.wordpress.com/wp-content/uploads/2013/02/oathtaking.jpg"}
                            headerText={"We're trusted."} />
                    </div>
                </div>
            </div>
            <div className=' lg:mx-20'>
                <ImageTextBlockR
                    imgSrc="https://widget.campusexplorer.com/media/original/media-50FF297D.jpg"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid fugit sed ipsa voluptatem ipsum vel vitae, expedita nam corrupti vero rerum amet minima dignissimos, veniam nobis aliquam nesciunt. Consequuntur."
                />
                <ImageTextBlockL
                    imgSrc="https://widget.campusexplorer.com/media/original/media-50FF297D.jpg"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid fugit sed ipsa voluptatem ipsum vel vitae, expedita nam corrupti vero rerum amet minima dignissimos, veniam nobis aliquam nesciunt. Consequuntur."
                />
            </div>


            <Footer />
        </>
    );
}

export default Home;