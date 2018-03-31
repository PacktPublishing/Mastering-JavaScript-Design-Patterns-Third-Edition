let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = () => {
   if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
        //process returned data
   }
};
xmlhttp.open('GET', 'http://some.external.resource', true);
xmlhttp.send();