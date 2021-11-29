import { useEffect, useState } from "react"


const Products = () => {

    const [data, setData] = useState([]);
    const[filter , setFilter] = useState(data);
    const [loading, setloading] = useState(false);

    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setloading(true);
            const response = await fetch
        }
    getProducts()
    },[])
    return (
        <div>

        </div>
    )
}
export default Products