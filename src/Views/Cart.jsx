
import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import { collection, getDoc, doc, getFirestore } from 'firebase/firestore';
import CartDetailCard from '../components/CardDetailCart/CardDetailCart.jsx';


const fetchProductsbyIds = async (ids) => {
    const db = getFirestore();
    const productRefs = ids.map((id) => doc(collection(db, "products", id)));


    const productSnapshot = await Promise.all(
        productRefs.map((productRef) => getDoc(productRef))
    );

    const products = productSnapshot.map((productSnapshot) => {
        if (productSnapshot.exists()) {
            return { id: productSnapshot.id, ...productSnapshot.data()}
        } else {
            return null;
        }
    });
    return products.filter((product) => product !== null)
};

const Cart = () => {

    const [error, setError] = React.useState(false);
    const [productsData, setProductsData ] = React.useState([]);

    const {count} = useContext(CartContext);

    React.useEffect(() => {
        const ids = count.products.map((product) => product.productId);
        fetchProductsbyIds(ids)
                  .then((res) => {
                    setProductsData(res);
                  })
                  .catch((err) => setError(err));
    }, [count])

    return (
        <div>
            <div>
                {productsData.map((product) => (
                    <CartDetailCard key={product.id} product={product} qty={count.products.find((item) => item.productId === product.id)}/>
                ))}
            </div>
        </div>
    )
}

export default Cart;