import { renderMenu, renderOrder,subtractItem ,addItem,removeItem} from "./render"

renderMenu()
renderOrder()

document.addEventListener('click',(e)=>{
   const {target:{dataset:{add,subtract,remove}}}=e

    add&&addItem(add)
    subtract&&subtractItem(subtract)
    remove&&removeItem(remove)
   
})