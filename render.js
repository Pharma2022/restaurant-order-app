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
    
    
    const targetMenuFood=targetFood(ID,menuArray)

    const {name,price,id,type}=targetMenuFood
    const targetOrderFood=targetFood(ID,ordersArr)
    
    if (!targetOrderFood){

        const orderObj={name,price,id,type,count:1}
        ordersArr.push(orderObj)
    } else{
        targetOrderFood.count++
    }
    console.log(targetMenuFood)
    console.log(ordersArr)
}

export const renderMenu=()=>menu.innerHTML=`<div class="menu-item-wrapper flex-col">${
    menuArray.map(({
        name,
        ingredients,
        price,
        emoji,
        id,
        type,})=>
            `<div class="menu-item  flex-row  align-center space-around">
                <div class="menu-content-wrapper flex-row align-center">
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
                <div class="menu-button-wrapper flex-row">
                    <button class="menu-button space-around"  >
                    <i class="fa-solid fa-circle-minus" data-remove=${id}>
                            </i>
                    </button>
                    <button class="menu-button space-around"  >
                    <i class="fa-solid fa-circle-plus" data-add=${id}>
                            </i>
                    </button>
                
                </div>
        </div>
        <hr class="menu-hr"/>`
        
        
        
        )

}</div>`