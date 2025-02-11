export const getDataFromLocalstorage = () => {
  const getData = localStorage.getItem("cart");
  return getData ? JSON.parse(getData) : []; 
};


export const saveDataInLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}