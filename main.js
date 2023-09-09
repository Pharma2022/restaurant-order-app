import { renderMenu } from "./render"
import { addItem } from "./render"
renderMenu()

document.addEventListener('click',(e)=>{
   
    if(e.target.dataset.add){
        addItem(e.target.dataset.add)
    }
})