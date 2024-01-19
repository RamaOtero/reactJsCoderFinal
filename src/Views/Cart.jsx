import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import { collection, getDoc, doc, getFirestore } from 'firebase/firestore';
import CartDetailCard from '../components/CardDetailCart/CardDetailCart.jsx';
import '../App.css';

const fetchProductsbyIds = async (ids) => {
    const db = getFirestore();
    const productRefs = ids.map((id) => doc(collection(db, "products"), id));


    const productSnapshots = await Promise.all(
        productRefs.map((productRef) => getDoc(productRef))
    );

    const products = productSnapshots.map((productSnapshot) => {
        if (productSnapshot.exists()) {
            return { id: productSnapshot.id, ...productSnapshot.data() }
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
        if (ids){
            fetchProductsbyIds(ids)
                      .then((res) => {
                        setProductsData(res);
                      })
                      .catch((err) => setError(err));
        } else {
            setProductsData([]);
        }
    }, [count])

    return (
        <div>
            <div className='cart'>
                
                {productsData.map((product) => (
                    
                    <CartDetailCard key={product.id} product={product} qty={count.products.find((item) => item.productId === product.id)}/>
                ))}
                <button className='bttnItem'>COMPRAR</button>
            </div>
        </div>
    )
}

export default Cart;