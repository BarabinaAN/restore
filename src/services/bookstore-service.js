export default class BookstoreService {
   _books = [
      {
          id: 1,
          title: 'Властелин Колец [TEST DATA]',
          author: 'Дж. Р.Р. Толкин',
          price: 750,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
      },
      {
          id: 2,
          title: 'Ходячий замок  [TEST DATA]',
          author: 'Диана У. Джонс ',
          price: 300,
          image: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
      }
  ];

   getBooks = () => {
      return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this._books)
          }, 700)
      })
    }
}