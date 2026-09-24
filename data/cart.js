 export let cart=[{
  productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2
 },{
  productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1
 }];

 //function to add a product to cart like what functions should be done beofre adding it
export function addtoCart(product){

    let matchingItem;

    cart.forEach((cartitem) => {
      if(cartitem.productId===productId){
        matchingItem=cartitem;
        return;
      }
    });


    if(matchingItem){
      matchingItem.quantity+=1;
    } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}

export function removeFromCart(productId){
  //create a new array with all the items except the one to be removed
  const newCart=[];
  cart.forEach((cartitem) => {
    if(cartitem.productId!==productId){
      newCart.push(cartitem);
    }
  });
  cart=newCart;
}