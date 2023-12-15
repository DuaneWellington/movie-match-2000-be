// import config from '../config'

export async function index(){
    // we are done with fetch - boring - so basic - AXIOS
    const res = await fetch(config.API_URL, {method: "GET"})
    if(res.ok){
        return res.json()
    } else {
        throw new Error("Invalid request")
        // HFM - explore Error construction function - JS -> cause, message
    }
}