const cart = ["Shoes", "t-shirt", "Jeans", "Punjabi"];

// * Calling callback functions one after the another makes code very unreadable and maintainable
// * After createorder() executes, its his job to call proceedTopayemnt(), after proceedTopayemt() executes, its his job to call showOrderSummary(), after showOrderSummary() executes, its showOrderSummary()'s job to call updateWallet. So, By this type of Asynchronus stuffs, we make our code unreadable and maintainable. This is Callback Hell.

// // This is Callback Hell.
/*
api.createOrder(cart, ()=>{
    api.proceedTopayemt(()=>{
        api.showOrderSummary(()=>{
             api.updateWallate()
    })
        })
    }){

    }
*/

// // Inversion of Control
