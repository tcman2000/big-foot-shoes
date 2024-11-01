


async function getInventory(){
    const resp = await fetch('https://m252cwc0oj.execute-api.us-east-2.amazonaws.com/dev/inventory-management/inventory/');
    const json = await resp.json();
    console.log(json);
    return json;
}

function convertToArray(obj){
    const res = []
    for(const keey in obj){
        res.push({qty:0, ...obj[keey]})
    }
    return res;
}

export {getInventory, convertToArray };