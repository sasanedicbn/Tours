import Tour from "./Tour";
import { useEffect, useState } from "react";

const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
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

        fetchData(); 
    }, []); 

    function removeTour(id) {
        const updatedTours = tours.filter((tour) => tour.id !== id);
        setTours(updatedTours);
    }

    return (
        <section className="tours-container">
            {tours.map((tour) => (
                <Tour key={tour.id} tour={tour} removeTour={removeTour} />
            ))}
        </section>
    );
}

export default Tours;
