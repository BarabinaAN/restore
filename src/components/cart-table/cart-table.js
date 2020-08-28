import React from 'react'
import { connect } from 'react-redux'
import { bookAddToCart, bookRemoveFromCart, allBooksRemoveFromCart } from '../../actions'
import './cart-table.css'

const CartTable = ({ items, total, onInc, onDec, onDelete }) => {

  const renderItems = (item, indx) => {
    const { id, title, count, total } = item
    console.log(id);
    return (
      <tr key={id}>
        <td>{indx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total} P</td>
        <td>
          <button className='btn btn-outline-danger btn-sm float-right'
            onClick={() => onDelete(id)}>
            <i className='fa fa-trash-o' />
          </button>
          <button className='btn btn-outline-success btn-sm float-right'
            onClick={() => onInc(id)}>
            <i className='fa fa-plus-circle' />
          </button>
          <button className='btn btn-outline-warning btn-sm float-right'
            onClick={() => onDec(id)}>
            <i className='fa fa-minus-circle' />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className='cart-table'>
      <h2>Ваш заказ</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>№</th>
            <th>Книга</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Действие</th>
          </tr>
        </thead>

        <tbody>{items.map(renderItems)}</tbody>
      </table>

      <div className='total'>
        Итого: {total}P
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.cartItems,
    total: state.cart.orderTotal
  }
}

const mapDispatchToProps = {
    onInc: bookAddToCart, 
    onDec: bookRemoveFromCart, 
    onDelete: allBooksRemoveFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable)