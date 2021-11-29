import { useEffect, useState } from "react"


const Products = () => {

    const [data, setData] = useState([]);
    const[filter , setFilter] = useState(data);
    const [loading, setloading] = useState(false);

    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const response = await fetch('https://fakestoreapi.com/products');

            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setloading(false)
            }
            return () => {
                 componentMounted = false;
            }
        }
    getProducts()
    },[]);
      const Loading = () => {
          return (
              <>
              Loading ...
              </>
          )
      };

      const showMovies = () => {

          return (
              <>
              <div className = "buttons">
              <button className="btn btn-outline-dark">ALL</button>
              <button className="btn btn-outline-dark me-2">New BlockBuster</button>
               
     </div>
              </>
          );
      };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Show</h1>
                        <hr/>
                        <div className="row justify-content-center">
                            {loading ? <Loading/> : <showMovies/>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Products