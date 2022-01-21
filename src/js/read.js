/*
        Read First

*/

import {ref, get} from 'firebase/database';
import {db} from './libs/firebase/firebaseConfig'; 

// get the data load in session storage... update delete

let store = []
async function pageInit(){
    const userRef = ref(db, "users/")
    const userSnapShot = await get(userRef)
    const userData = userSnapShot.val()
    console.log(userData)
    const users = Object.keys(userData).map(key=>{
        userData[key].id = key;
        return userData[key]
    })
    // build out the user card component
    // html + css ui/view userCard
    //template

    // rendering    component + data ===> ui

    console.log(users)
    // object
    // object.property
    // object['property']


    //sessionStorage.setItem('store')
}

pageInit()