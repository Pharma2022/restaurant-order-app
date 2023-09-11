import { formContainer } from "./consts"
import { handleSubmit, makeNewOrder, show,hide } from "./paymentForm"
import { renderMenu, renderOrder,subtractItem ,addItem,removeItem} from "./render"

renderMenu()
renderOrder()

document.addEventListener('click',(e)=>{
    e.preventDefault()
   const {target:{dataset:{add,subtract,remove},id}}=e

    add&&addItem(add)
    subtract&&subtractItem(subtract)
    remove&&removeItem(remove)
    id==='complete-order'&& show(formContainer)
    id==='close-form'&&hide(formContainer)
    id==='new-order'&&makeNewOrder()
    id==='payment-button'&&handleSubmit(e)
    
})

