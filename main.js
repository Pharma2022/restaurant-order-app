import { renderMenu } from "./render"
import { addItem } from "./render"
renderMenu()
import { removeItem } from "./render"
document.addEventListener('click',(e)=>{
   const {target:{dataset:{add,remove}}}=e

    add&&addItem(add)
    remove&&removeItem(remove)
   
})