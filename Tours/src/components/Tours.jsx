import Tour from "./Tour";
import { useState } from "react";
const Tours = ({toursData}) => {
    const[tours, setTours] = useState(...toursData)

    function removeTour(id) {
      const updateTours = tours.filter((tour) => tour.id !== id)
      setTours(updateTours)
      console.log(id)
      console.log(tours)
    }

    return(
     <section className="tours-container">
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
        })}
     </section>
    )
}

export default Tours;