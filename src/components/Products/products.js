import img1 from '../../Assets/merch/hoodie1.jpg'
import img2 from '../../Assets/merch/hoodie2.jpg'
import img3 from '../../Assets/merch/hoodie3.jpg'
import img4 from '../../Assets/merch/hoodie4.jpg'
import img5 from '../../Assets/merch/hoodie5.jpg'

export const productList = [{
    name:"Hoodie Black Anti",
    price:9000,
    stock:5,
    id:"44",
    image:img1,
    category:"hoodie23",
    discount:5,
    color: "negro",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel consectetur lacus, eget posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et.",
},
{
    name: "Hoodie White",
    price: 9000,
    stock: 5,
    id:"45",
    image:img2,
    category:"hoodie23",
    discount: 5,
    color: "negro",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel consectetur lacus, eget posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et.",
},
{
    name: "Hoodie White",
    price: 9000,
    stock: 5,
    id:"46",
    image:img3,
    category: "Hoodie",
    discount: 5,
    color: "negro",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel consectetur lacus, eget posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et.",
},
{
    name: "Hoodie White",
    price: 9000,
    stock: 5,
    id:"47",
    image:img4,
    category: "Hoodie",
    discount: 5,
    color: "negro",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel consectetur lacus, eget posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et.",
},
{
    name: "Hoodie White",
    price:9000,
    stock: 5,
    id:"48",
    image:img5,
    category: "Hoodie",
    discount: 5,
    color: "negro",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel consectetur lacus, eget posuere lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et.",
},
];

export const traerProducto = ({itemID}) => {
    return new Promise((resolve, reject) => {
        const productoFiltrado = productList.find((product) => {
            return product.id === userID});
        setTimeout(() => {
            resolve(productoFiltrado);
            console.log(productoFiltrado)
        },);
    });
};