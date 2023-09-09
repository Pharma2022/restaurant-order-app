import { menuArray } from "./data";
import { nanoid } from "nanoid";
import { menu,order } from "./consts";


let ordersArr=[]
const targetFood=(ID,arr)=>arr.filter(({id})=>id===ID)[0]




export const addItem=(ID)=>{
    
    console.log('hello')
    const targetMenuFood=targetFood(ID,menuArray)

    const {name,price,id,type}=targetMenuFood
    const targetOrderFood=targetFood(ID,ordersArr)
    
    // if (!targetOrderFood){

        
    //     ordersArr.push({...targetMenuFood,count:1})
    // } else{
    //     targetOrderFood.count++
    // }
    // renderMenu()
    renderOrder()
    console.log('target menu food '+ targetMenuFood)
    console.log('target order food '+ targetOrderFood)
    console.log('orders arr '+ ordersArr)
   
}

export const renderMenu=()=>menu.innerHTML=`<div class="menu-item-wrapper flex-col">${
    menuArray.map(({
        name,
        ingredients,
        price,
        emoji,
        id,
        type,})=>
            `<div class="menu-item  flex-row  align-center">
                <div class="menu-content-wrapper flex-row align-center space-between">
                        <div class="menu-food-emoji">
                                ${emoji}
                        </div>
                        <div class="menu-content-food-wrapper flex-col">
                            <h3 class="menu-food-name">${name}</h3>
                            <p class="menu-food-ingredients">
                                ${ingredients.map((item,i)=> i < (ingredients.length-1) ? `${item}, ` : `and ${item}`)}
                            </p> 
                            <p class="menu-food-price">$${price}</p>
                        </div>  
                </div>
                <div class="menu-button-wrapper flex-row space-around">
                    <button class="menu-button"  >
                    <i class="fa-solid fa-circle-minus" data-remove="${id}">
                            </i>
                    </button>
                    <button class="menu-button space-around"  >
                    <i class="fa-solid fa-circle-plus" data-add="${id}">
                            </i>
                    </button>
                
                </div>
        </div>
        <hr class="menu-hr"/>`).join("")

}</div>`

const renderOrder=()=>order.innerHTML=ordersArr.length?`<h3 class="order-title">Your Order</h3>
        <div class="order-items-container flex-col" >
            ${ordersArr.map(({price,name,count,id})=>
                 `<div class="order-item-wrapper flex-row space-between align-center">
                            <div class="order-content-wrapper flex-row align-center space-between">
                                    <p class="order-content-food">
                                        ${name}
                                    </p>
                                    <span class='quantity>Quantity: ${count} </span>
                                    <span class="order-content-button" data-remove=${id}>
                                        Remove
                                    </span>
                            </div>
                            
                            <p class="order-price"
                                $${price}
                            </p>

                    </div>`).join("")}
        </div>`:""



