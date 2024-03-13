import Tour from "./Tour";
import { useState } from "react";
const Tours = ({toursData}) => {
    const[tours, setTours] = useState(toursData)


    return(
     <section className="tours-container">
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} />
        })}
     </section>
    )
}

export default Tours;