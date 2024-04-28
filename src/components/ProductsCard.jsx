import { useContext } from "react";
import ProductsProvider, {
  useProductsContext,
} from "../contexts/ProductsProvider";
import { searchIcon } from "../helper/icons";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const ProductsCard = () => {
  const navigate = useNavigate()
  const { products, loading } = useProductsContext();
  console.log(products);


  return (
    <div>
      <div className="mt-10">
        <h4>All Products</h4>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5">
            {products.map(({ category, id, thumbnail, title, price }) => {
              return (
                <div key={id} className="w-[250px] m-auto cursor-pointer" onClick={() => navigate(`${id}`)}>
                  <img src={thumbnail} className="h-[350px]" alt="" />
                  <div className="flex justify-between gap-3 my-1">
                    <p>{title}</p>
                    <p>$ {price}</p>
                  </div>
                  <h6>{category}</h6>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
