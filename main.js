import { renderMenu } from "./render"
import { addItem } from "./render"
renderMenu()
import { removeItem } from "./render"
document.addEventListener('click',(e)=>{
   
    if(e.target.dataset.add){
        addItem(e.target.dataset.add)
    }
    if(e.target.dataset.remove){
        removeItem(e.target.dataset.remove)
    }
})