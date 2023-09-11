import { form,formContainer, formName, order, orderConfirmation, orderConfirmationText } from "./consts";
import { clearOrderArr } from "./render";


export const show=(id)=>id.classList.remove('hide')
export const hide=(id)=>id.classList.add('hide')
const clearOrder=()=>order.innerHTML=""
export const makeNewOrder=()=>{
    hide(orderConfirmation)
}

export const handleSubmit=(e)=>{
    clearOrderArr()
    const customerName=formName.value
    
    orderConfirmationText.textContent=`Thanks ${customerName}, your order is on the way!`
    show(orderConfirmation)
    form.reset()
    clearOrder()
    hide(formContainer)
}