import React, {useId} from 'react'

function Inputbox({

  lable,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'inr',
  amountDisable = false,
  currencyDisable = false,

}) {
   const amountInputId = useId()

    return(
     <div className='bg-white px-3 text-sm flex rounded-lg '>
       <div className='w-1/2'>
        <label htmlFor= {amountInputId} className='text-black/40 mb-2 inline-block'>
          {lable}
        </label>

       <input type="number"
              id= {amountInputId}
              className='outline-none w-full bg-transparent py-1.5'
              placeholder='Amount'
              disabled = {amountDisable}
              value={amount}
              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
               />
      </div>

      <div className='w-1/2 flex flex-wrap text-right justify-end'>
       <p classname='text-black/40 mb-2 w-full'>Currency Type</p>

       <select classname='outline-none bg-gray-100 px-1 py-1 rounded-lg  cursor-pointer' 
               value={selectCurrency}
               onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
               disabled = {currencyDisable}
               >

        {currencyOptions.map((currency) => (

          <option key={currency} value= {currency}>    // Agar loop ka use kare to key complesary chaiye
           {currency}
          </option>
        ))}

       </select>

      </div>
    </div>
  )
}

  

export default Inputbox
