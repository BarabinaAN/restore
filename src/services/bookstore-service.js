export default class BookstoreService {
   _books = [
      {
          id: 1,
          title: 'Bilbo Baggins [TEST DATA]',
          author: 'male',
      },
      {
          id: 2,
          title: 'Frodo Baggins [TEST DATA]',
          author: 'male',
      }
  ];

   getBooks = () => {
      return this._books
   }
}