import Tour from "./Tour";
import { useEffect, useState } from "react";
import RefetchData from "./RefetchData";

const Tours = () => {
    const [tours, setTours] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://course-api.com/react-tours-project');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTours(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData(); 
    }, []); 

    const refetchData = () => {
        fetchData()
    }
    // function showText() {
    //  tours.forEach((tour) => tour.info.slice(0,25))
     
    // }
    // showText()

    function removeTour(id) {
        const updatedTours = tours.filter((tour) => tour.id !== id);
        setTours(updatedTours);
    }
    
    
    return (
        <section className="tours-container">
            {tours.map((tour) => (
                <Tour key={tour.id}  tour={tour} removeTour={removeTour} />
            ))}
            {tours.length === 0 && <RefetchData refetchData={refetchData}/> }
        </section>
    );
}

export default Tours;
