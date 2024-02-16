
import Button from './UI/Button';
import logoImg from '../assets/logo.jpg'
import { useContext } from 'react';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
    const CartCtx = useContext(CartContext);
 const userProgressCtx =  useContext(UserProgressContext)


const totalCartItems = CartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
}, 0)

function handleShowCart() {
    userProgressCtx.showCart()
}

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restautrant" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}