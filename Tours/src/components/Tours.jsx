import Tour from "./Tour";
const Tours = ({toursData}) => {
    return(
    <div>
        {toursData.map((tour) => {
          return <Tour key={tour.id} tour={tour}/>
        })}
        
    </div>
    )
}

export default Tours;