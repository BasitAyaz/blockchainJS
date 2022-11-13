import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, push,onValue } from "firebase/database";

import app from "./firebaseconfig";

const auth = getAuth(app);
const database = getDatabase();

let signUpUser = (obj) => {
  const { email, password, userName } = obj;
  return createUserWithEmailAndPassword(auth, email, password);
};

let loginUser = (obj) => {
  const { email, password } = obj;
  return signInWithEmailAndPassword(auth, email, password);
};

let sendData = (obj, nodeName, id) => {
  let reference;
  if (id) {
    // edit ka case
    reference = ref(database, `${nodeName}/${id}/`);
  } else {
    // add ka case
    // we are creating reference for generating ID/unique Key
    let idReference = ref(database, nodeName);
    obj.id = push(idReference).key;


    reference = ref(database, `${nodeName}/${obj.id}/`);
  }
  set(reference, obj);
};


let getData = (nodeName,id)=>{
    const reference = ref(database, `${nodeName}/${id?id:''}`)

    onValue(reference,(data)=>{
        let arr = Object.values(data.val())
        console.log(arr)
    })

}


export { signUpUser, loginUser, sendData,getData };
