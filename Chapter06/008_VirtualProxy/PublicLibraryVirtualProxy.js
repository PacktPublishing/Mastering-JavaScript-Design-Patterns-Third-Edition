import { initializeLibrary } from './utils';

class PublicLibraryVirtualProxy {
    constructor(catalog = []) {
      this.library = null;
      this.catalog = catalog;
    }
  
    findBooks(query) {
      console.log("Enter findBooks PublicLibraryVirtualProxy");
      initializeLibrary(this);
      return this.library.findBooks(query);
    }
  
    checkoutBook(book) {
      initializeLibrary(this);
      return this.library.checkoutBook(book);
    }
  
    returnBook(book) {
      initializeLibrary(this);
      return this.library.returnBook(book);
    }
}

export default PublicLibraryVirtualProxy;