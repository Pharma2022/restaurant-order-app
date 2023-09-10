import { menuArray } from "./data";
import { menu,order } from "./consts";


// let ordersArr=[]

let ordersArr=menuArray.map(item=>({...item,count:1}))
const targetFood=(ID,arr)=>arr.filter(({id})=>id===ID)[0]




export const subtractItem=(ID)=>{
    
    const targetOrderFood= targetFood(ID,ordersArr)
   
    targetOrderFood.count ? targetOrderFood.count-- :""
    targetOrderFood.count===0&& removeItem(ID)
    renderMenu()
    renderOrder()
}

export const addItem=(ID)=>{

    const targetMenuFood=targetFood(ID,menuArray)
    const targetOrderFood=targetFood(ID,ordersArr)||null
    targetOrderFood?targetOrderFood.count++ :ordersArr.push({...targetMenuFood,count:1})
    renderMenu()
    renderOrder()
}

export const removeItem=(ID)=>{
    
     ordersArr=ordersArr.filter(({id})=>id!==ID)
     renderMenu()
     renderOrder()
}


export const renderMenu=()=>{
   
    menu.innerHTML=`<div class="menu-item-wrapper flex-col">${
    menuArray.map(({
        name,
        ingredients,
        price,
        emoji,
        id,
        type,})=>
            `<div class="menu-item  flex-row   align-center space-between">
                <div class="menu-content-wrapper flex-row align-center">
                        <div class="menu-food-emoji ">
                                ${emoji}
                        </div>
                        <div class="menu-content-food-wrapper flex-col ">
                            <h3 class="menu-food-name">${name}</h3>
                            <p class="menu-food-ingredients flex-col ">
                                ${ingredients.map((item,i)=> i < (ingredients.length-1) ? `${item}, ` : `and ${item}`).join("")}
                            </p> 
                            <p class="menu-food-price">$${price}</p>
                        </div>  
                </div>
                <div class="menu-button-wrapper flex-row space-between">
                    <button class="menu-button"  >
                        <i class="fa-solid fa-circle-minus" data-subtract="${id}"></i>
                    </button>
                    <button class="menu-button"  >
                        <i class="fa-solid fa-circle-plus" data-add="${id}"></i>
                    </button>
                
                </div>
        </div>
        <hr class="menu-hr"/>`).join("")

}</div>`}

export const renderOrder=()=>{

    order.innerHTML=ordersArr.length?`<h3 class="order-title">Your Order</h3>
        <div class="order-items-container flex-col" >
            ${ordersArr.map(({price,name,count,id})=>
                 `<div class="order-item-wrapper flex-row space-between align-center">
                            <div class="order-content-wrapper flex-row align-center space-between">
                                    <div class="order-content-food flex-row space-between width-full">
                                        <span>${name}</span> <span>x ${count}</span> 
                                    </div>
                                    <span data-remove="${id}">remove</span>
                            </div>
                            
                            <div class='order-price-wrapper flex-row space-between align-center'>
                                <div class='order-content-button-wrapper flex-row space-around align-center'>
                                    <button class="order-content-button"  >
                                        <i class="fa-solid fa-circle-minus" data-subtract="${id}"></i>
                                    </button>
                                    <button class="order-content-button"  >
                                        <i class="fa-solid fa-circle-plus" data-add="${id}" ></i>
                                    </button>
                                    
                                </div>    
                            
                           
                                <p class="order-price">
                                $${price*count}
                                </p>
                            </div>

                    </div>`).join("")}
        </div>
        
        ${getOrderTotalHtml()}
        `:""
    
    }



export const getOrderTotalHtml=()=>{
    const subTotal = ordersArr.reduce((acc,{price})=>acc+price,0).toFixed(2)
    
    const targetType=(typ)=>ordersArr.filter(({type})=>type===typ)[0]
    const isDiscounted = targetType('food')&&targetType('drink')
    console.log(isDiscounted)
    const total=isDiscounted? (subTotal*0.9).toFixed(2) :subTotal
    const discount =isDiscounted ? (subTotal-total).toFixed(2) :null


    return `${isDiscounted? 
            `<hr class='order-hr'/>
            <div class="total-price-wrapper flex-row space-between align-center">
                <span class="total-price-text">Subtotal: </span>
                <span class="total-price-amount">$${subTotal}</span>
            </div>
            <div class="total-price-wrapper flex-row space-between align-center">
                <span class="total-price-text">Meal Deal Discount 10%: </span>
                <span class="total-price-amount">-$${discount}</span>
            </div>
            `:null }
            <hr class='order-hr'/>
            <div class="total-price-wrapper flex-row space-between align-center">
                <span class="total-price-text">Total:</span>
                <span class="total-price-amount">${total}</span>
            </div>
            
            <button class="order-button btn-primary">Complete Order</button>`


}