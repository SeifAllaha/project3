

// localStorage.clear();

let allProducts = document.getElementById('allProducts') ;
    for( let i = 0 ; i < localStorage.length; i++ ){
            let key      = localStorage.key(i)
            let Product  = localStorage.getItem(key); 
            let data     = JSON.parse(Product);
        allProducts.innerHTML += `
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-3 py-2 px-2">
                    <img src="${data.image}" class="img-fluid" alt="...">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.des}</p> 
                        <p>${data.price}</p>
                    </div>
                </div>
                <div class="col-md-2 pt-5 text-center ">
                    <i class="fa-regular fa-trash-can mt-3 delete ${data.title} "></i>
                </div>
            </div>
        </div> `
    }
//  delet
 document.addEventListener('click', (e)=>{
   if( e.target.classList.contains('delete')){
    let name = e.target.classList[4];
    console.log(name);
    console.log(localStorage);
    localStorage.removeItem(name);
    window.location.reload();
   }
   else{

   }
} )  
//  toggle
let noProduct =document.getElementById('noProduct')
if(allProducts.childElementCount > 0){
    noProduct.style.display="none"
}else{
    noProduct.style.display="block"
}