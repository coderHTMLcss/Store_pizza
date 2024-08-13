import React from 'react'
import { Link } from 'react-router-dom'
import emptyCart from "../assets/img/empty-cart.png"

const CartEmptyComponent = () => {
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Кошик порожній <b>😕</b></h2>
                    <p>
                        Скоріш за все, ви ще не обрали піцу.<br />
                        Для того, щоб замовити піцу, перейдіть на головну сторінку.
                    </p>
                    <img src={emptyCart} alt="Empty cart" />
                    <Link to="/" className="button button--black">
                        <span>Повернутися назад</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartEmptyComponent
