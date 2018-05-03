export default {
    initializeLibrary: (instance) => {
        if (instance.library === null) {
          instance.library = new PublicLibrary(instance.catalog);
        }
    }
};