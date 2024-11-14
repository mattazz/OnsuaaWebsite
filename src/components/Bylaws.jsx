import Footer from "./Footer";

function Bylaws(){
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <h1>Bylaws</h1>
                <p>Bylaws are the rules that govern how an organization is run. They are essential for ensuring that the organization operates effectively and efficiently. Bylaws typically cover a wide range of topics, including the organization's purpose, structure, membership, meetings, and decision-making processes. Bylaws are legally binding and must be followed by all members of the organization.</p>
            </div>
            <Footer />
        </div>
    );
}

export default Bylaws;