import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";


const postspool = document.getElementById("offerspool");

const db = getFirestore();


readposts();

export async function readposts() {

    var ref = collection(db, "offers");
    const docsnap = await getDocs(ref);
    postspool.innerHTML = "";
    console.log(docsnap);
    if (!docsnap.empty) {

        searchcards(docsnap);

        } else {
        notfound();
    }

/*
    get(child(dbRef, `offers`)).then((snapshot) => {
        postspool.innerHTML = "";
        if (snapshot.exists()) {
            console.log(snapshot.val());

            console.log(snapshot.val());
            //?featch posts
            //?show posts
            for (const post in snapshot.val()) {

                postspool.innerHTML = postspool.innerHTML + `
                
                <section class="offer">
        <section class="offerleft">
            <div class="offerleftside">

            </div>
        </section>
        <section class="offerrightside" >
            <div class="offerdoctorgender" style="color:var(--male) !important;">
                &#xf183;
                Male
            </div>
            <div class="offername">
                ${snapshot.val() [post].doctorname}
            </div>
            <div class="offercontent">
              ${snapshot.val()[post].brif}
            </div>
            <div class="offerspecial">
                ${snapshot.val()[post].freetime}
            </div>
            <div class="offerfooter">
                <div class="offerrating">
                    <div class="offerrate">
                        <span>Rate : </span>
                        <span>&#xf005;</span>
                        <span>&#xf005;</span>
                        <span>&#xf005;</span>
                        <span>&#xf005;</span>
                        <span>&#xf005;</span>
                    </div>
                    <div class="offerfollowers">
                    Followers : ${snapshot.val()[post].followers}
                    </div>
                    </div>
                    <div class="offerprice">
                    <!-- price:200$ --><br>
                    <button class="offersubscribe" style="font-family: icons;" >&#xf075;&nbsp;&nbsp;chat</button>
                    </div>
                    </div>
                    
                    </section>
                    
                    `
                }

            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
    });
    */
}


function rate(z) { 
    var x = "";
    for (let i = 0; i < z; i++) {
        x += "<span>&#xf005;</span>";
    }
    return x;
}



export function searchcards(docsnap) {
    postspool.innerHTML = "";
    //?featch posts
    //?show posts
    docsnap.docs.map((post) => {

        postspool.innerHTML = postspool.innerHTML + `
                
                <section class="offer">
        <section class="offerleft">
            <div class="offerleftside">

            </div>
        </section>
        <section class="offerrightside" >
            ${post.data().gender == "male" ? `<div class="offerdoctorgender" style="color:var(--male) !important;">
                &#xf183;  Male
            </div>`: `<div class="offerdoctorgender" style="color:var(--female) !important;">
                &#xf182;  Female
            </div>`}
            
            <div class="offername">
                ${post.data().doctorname}
            </div>
            <div class="offercontent">
              ${post.data().brif}
            </div>
            <div class="offerspecial">
                Time : ${post.data().freetime}
            </div>
            <br>
            <div class="offerfollowers">
                Country : ${post.data().country}
            </div>
            <div class="offerfooter">
                <div class="offerrating">
                    <div class="offerrate">
                        <span>Rate : </span>
                        ${rate(post.data().rate)}
                    </div>
                    <div class="offerfollowers">
                        Followers : ${post.data().followers}
                    </div>
                </div>
                <div class="offerprice">
                   <!-- price:200$ --><br>
                    <button class="offersubscribe" style="font-family: icons;" >&#xf075;&nbsp;&nbsp;chat</button>
                </div>
            </div>

        </section>
                
                `
    })
}


export function notfound() {
    postspool.innerHTML = "";
    postspool.innerHTML = "<h4 style='color:var(--invert)'>Not found</h4>";
}
















    // <section class="offer">
    //     <section class="offerleft">
    //         <div class="offerleftside">

    //         </div>
    //     </section>
    //     <section class="offerrightside" >
    //         <div class="offerdoctorgender" style="color:var(--male) !important;">
    //             &#xf183;
    //             Male
    //         </div>
    //         <div class="offername">
    //             Marwan Ahmed
    //         </div>
    //         <div class="offercontent">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum doloremque cumque quod accusamus explicabo minus, molestiae ex iure reiciendis libero, voluptatibus amet praesentium ipsam sunt voluptatum quo sit omnis?
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero suscipit atque iure, officiis quaerat vel ea, nihil iusto unde reprehenderit explicabo reiciendis quod temporibus quas quibusdam, itaque consequatur excepturi!
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur odio accusantium repudiandae numquam officia! Omnis ex sapiente beatae, labore eligendi dignissimos at, corrupti nulla porro commodi dicta laudantium cum.
    //         </div>
    //         <div class="offerspecial">
    //             specialist : dedication
    //         </div>
    //         <div class="offerfooter">
    //             <div class="offerrating">
    //                 <div class="offerrate">
    //                     <span>Rate : </span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                 </div>
    //                 <div class="offerfollowers">
    //                     Followers : 20K
    //                 </div>
    //             </div>
    //             <div class="offerprice">
    //                <!-- price:200$ --><br>
    //                 <button class="offersubscribe" style="font-family: icons;" >&#xf075;&nbsp;&nbsp;chat</button>
    //             </div>
    //         </div>

    //     </section>
    // </section>
    //     <section class="offer">
    //     <section class="offerleft">
    //         <div class="offerleftside">

    //         </div>
    //     </section>
    //     <section class="offerrightside" >
    //         <div class="offerdoctorgender" style="color :var(--male) !important;">
    //             &#xf183;
    //             Male
    //         </div>
    //         <div class="offername">
    //             Marwan Ahmed
    //         </div>
    //         <div class="offercontent">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum doloremque cumque quod accusamus explicabo minus, molestiae ex iure reiciendis libero, voluptatibus amet praesentium ipsam sunt voluptatum quo sit omnis?
    //             cusantium repudiandae numquam officia! Omnis ex sapiente beatae, labore eligendi dignissimos at, corrupti nulla porro commodi dicta laudantium cum.
    //         </div>
    //         <div class="offerspecial">
    //             specialist : dedication
    //         </div>
    //         <div class="offerfooter">
    //             <div class="offerrating">
    //                 <div class="offerrate">
    //                     <span>Rate : </span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                 </div>
    //                 <div class="offerfollowers">
    //                     Followers : 20K
    //                 </div>
    //             </div>
    //             <div class="offerprice">
    //                <!-- price:200$ --><br>
    //                 <button class="offersubscribe" style="font-family: icons;" >&#xf075;&nbsp;&nbsp;chat</button>
    //             </div>
    //         </div>

    //     </section>
    // </section>
    //     <section class="offer">
    //     <section class="offerleft">
    //         <div class="offerleftside">

    //         </div>
    //     </section>
    //     <section class="offerrightside" >
    //         <div class="offerdoctorgender" style="color:var(--male) !important;">
    //             &#xf183;
    //             Male
    //         </div>
    //         <div class="offername">
    //             Marwan Ahmed
    //         </div>
    //         <div class="offercontent">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum doloremque cumque quod accusamus explicabo minus, molestiae ex iure reiciendis libero, voluptatibus amet praesentium ipsam sunt voluptatum quo sit omnis?
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero suscipit atque iure, officiis quaerat vel ea, nihil iusto unde reprehenderit explicabo reiciendis quod temporibus quas quibusdam, itaque consequatur excepturi!
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tenetur odio accusantium repudiandae numquam officia! Omnis ex sapiente beatae, labore eligendi dignissimos at, corrupti nulla porro commodi dicta laudantium cum.
    //         </div>
    //         <div class="offerspecial">
    //             specialist : dedication
    //         </div>
    //         <div class="offerfooter">
    //             <div class="offerrating">
    //                 <div class="offerrate">
    //                     <span>Rate : </span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                     <span>&#xf005;</span>
    //                 </div>
    //                 <div class="offerfollowers">
    //                     Followers : 20K
    //                 </div>
    //             </div>
    //             <div class="offerprice">
    //                <!-- price:200$ --><br>
    //                 <button class="offersubscribe" style="font-family: icons;" >&#xf075;&nbsp;&nbsp;chat</button>
    //             </div>
    //         </div>

    //     </section>
    // </section>