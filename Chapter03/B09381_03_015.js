let xmlhttp;
const requestData = () => {
    xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = processData;
    xmlhttp.open('GET', 'http://some.external.resource', true);
    xmlhttp.send();
} 
const processData = () => {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
       //process returned data
    }
} 
