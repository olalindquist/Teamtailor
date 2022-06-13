
export function getRoleFromLink(link:string, setRole:(arg:string)=>void):void{

    var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token token=a5o4wu2Ghgnehh_kX79193wPTv9bD4A72hY5mtzv");
        myHeaders.append("X-Api-Version", "20210218");
        var requestOptions:any = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch(link, requestOptions)
            .then(response => response.json())
            .then (result => {
             setRole(result);

            })
            .catch(error => console.log('error', error))

    
}
