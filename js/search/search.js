import { getFirestore, collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import { notfound, readposts, searchcards } from "../offers/offers.js";

var type = "doctorname";
document.getElementById("dname").onclick=()=>{
    type="doctorname";
}
document.getElementById("atime").onclick=()=>{
    type="freetime";
}
const searchinput = document.getElementById("searchinput");

const db = getFirestore();
var ref = collection(db, "offers");

document.getElementById("searchbtn").onclick = () => {
    search(searchinput.value);
}

document.getElementById("searchall").onclick=()=>{
    readposts();
}
document.getElementById("searchmale").onclick=()=>{
    type="gender";
    search("male");
}
document.getElementById("searchfemale").onclick=()=>{
    type="gender";
    search("female");
}


async function search(searchinput) { 
    const q = query(ref, where(type, "==", searchinput));
    const docsnap = await getDocs(q);
    if (!docsnap.empty) {
        searchcards(docsnap);
    } else {
        notfound();
    }
}