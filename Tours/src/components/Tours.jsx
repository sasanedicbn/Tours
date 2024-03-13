import Tour from "./Tour";
const Tours = ({toursData}) => {
    return(
    <div>
        {toursData.map((tour) => {
         return   <Tour  tour={tour}/>
        })}
        
    </div>
    )
}

export default Tours;