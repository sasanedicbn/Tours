import Tour from "./Tour";
const Tours = ({toursData}) => {
    return(
     <section className="tours-container">
        {toursData.map((tour) => {
          return <Tour key={tour.id} tour={tour}/>
        })}
     </section>
    )
}

export default Tours;