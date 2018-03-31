$.ajax('http://some.external.resource', { 
    success: (json) => {
        //process returned data
    },
    error: () =>{
        //process failure
    }, 
    dataType: 'json'
});