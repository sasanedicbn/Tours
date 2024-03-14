import Tour from "./Tour";
import {  useState } from "react";

const Tours = () => {
    const [tours, setTours] = useState([]);


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
