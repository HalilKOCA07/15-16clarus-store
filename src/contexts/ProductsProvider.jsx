import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


//*context olustur
const productsContext = createContext()

//* react hookları javascript fonksiyonları içinde kullanılamadığında custem hook kullanılır.
//? Custem hookları "use" ile başlamak zorunda
//*custem hooklar jsx return etmez
//TODO zorunlu değil sadece kolaylık sayğlar

export const useProductsContext = () => {
    return useContext(productsContext)
};

//*todo context'e ihtiyac duymamızın sebebi detail sayfasına gittikten sonra geri geldiğimizde he kullanıcının yazdığı query hemde api den gelen sponuçların kaybolmaması için

//* Ayrıca products sayfasında yapsaydık veri çekme işlemini her sayfa render olduğunda arama olmadığı halde apiye istek atacaktı.

//*sarmalama componenti oluştur, Saklanan veriler,fonksiyonlar burada tanımlanır ve buradan paylaşılır

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    console.log(products)
    const getProducts = async() => {
        setLoading(true)
        try{
            const {data} = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
            setProducts(data.products)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
        
    } 

    useEffect(() => {
        getProducts()
    }, [search])

    const values = {products, loading, search, setSearch, setProducts}
    return(
        <productsContext.Provider value={values}>
            {children}
        </productsContext.Provider>
    )
}

export default ProductsProvider