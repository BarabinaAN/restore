import React from 'react'
import './cart-table.css'

const CartTable = () => {
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
  
          <tbody>
            <tr>
              <td>1</td>
              <td>Властелин Колец</td>
              <td>2</td>
              <td>750 P</td>
              <td>
                <button className='btn btn-outline-danger btn-sm float-right'>
                  <i className='fa fa-trash-o' />
                </button>
                <button className='btn btn-outline-success btn-sm float-right'>
                  <i className='fa fa-plus-circle' />
                </button>
                <button className='btn btn-outline-warning btn-sm float-right'>
                  <i className='fa fa-minus-circle' />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
  
        <div className='total'>
          Total: 1500P
        </div>
      </div>
    )
}
export default CartTable