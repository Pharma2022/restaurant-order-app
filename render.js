import { menuArray } from "./data";
import { nanoid } from "nanoid";
import { menu,order } from "./consts";


const ordersArr=[]
const targetFood=(ID,arr)=>arr.filter(({id})=>id===ID)[0]


document.addEventListener('click',(e)=>{

    if(e.target.dataset.add){
        addItem(e.target.dataset.add)
    }
})

const addItem=(ID)=>{
    console.log(menuArray)
    console.log(ID)
    // const targetMenuFood=targetFood(ID,menuArray)
    // console.log(targetMenuFood)
    // const {name,price}=targetMenuFood
    // const targetOrderFood=targetFood(ID,ordersArr)

    // if (!targetOrderFood){
    //     ordersArr.push({name,price,count:0})
    // } else{
    //     targetOrderFood.count++
    // }
    // console.log(ordersArr)
}

export const renderMenu=()=>menu.innerHTML=`<div class="menu-item-wrapper flex-col">${
    menuArray.map(({
        name,
        ingredients,
        price,
        emoji,
        type,})=>
            `<div class="menu-item space-between flex-row">
            <div class="menu-content-wrapper flex-row">
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
            <div class="menu-button-wrapper">
                <button class="menu-button"  >
                    <i class="fa-solid fa-circle-plus" data-add=${nanoid()}>
                        </i>
                </button>
            </div>
        </div>
        <hr class="menu-hr"/>`
        
        
        
        )

}</div>`