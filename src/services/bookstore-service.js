export default class BookstoreService {
   _books = [
      {
          id: 1,
          name: 'Bilbo Baggins [TEST DATA]',
          gender: 'male',
          birthYear: 'long ago',
          eyeColor: 'dark brown'
      },

      {
          id: 2,
          name: 'Frodo Baggins [TEST DATA]',
          gender: 'male',
          birthYear: 'long ago',
          eyeColor: 'dark brown'
      }
  ];

   getBooks = async () => {
      return this._books
   }
}