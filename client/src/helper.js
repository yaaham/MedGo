import axios from 'axios';
const link = "https://medgo-yaaham.herokuapp.com/"; 

export default class Helper {
    postData(credentials, type) {
        axios.post(link+type,credentials)
        .then(response => {
            console.log(response, 'Message added!');
          })
          .catch(err => {
            console.log(err, 'Message not added, try again');
          });
        
} 
GetData(type){ 
    return fetch(link+type).then((res)=>res.json());
}

}

    
