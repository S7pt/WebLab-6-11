import axios from 'axios'


const instance=axios.create({
    baseURL:'http://127.0.0.1:8000/insects',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getItems(){
    return (await instance.get()).data;
}

export async function getItemById(id){
    return(await instance.get(`/${id}`)).data;
}

export async function getFilteredItems(species, difficulty) {
    await delay(1000);
    return (await instance.get(`/filters/${species}&${difficulty}`)).data;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
} 