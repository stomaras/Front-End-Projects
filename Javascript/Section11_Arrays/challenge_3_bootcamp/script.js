const sales = [
    { id: 1, product: "VGA 1080ti", type: "graphic card", price: 400 },
    { id: 2, product: "Logitech g710+", type: "keyborad", price: 120 },
    { id: 3, product: "deathadder v2", type: "mouse", price: 70 },
    { id: 4, product: "logitech G1", type: "mouse", price: 80, discount: 0.2 }
  ];
  
  /* 
   1. We have the array sales with today's sales,
   we want to know the money we made today
   */
  const money = sales.reduce((sum, sale) => {return sum + sale.price},0);
console.log(money);
  /*
    2. We want to know the money 
    we made from the mouse we sold today
   */
  const moneyFromMouse = sales.reduce((acc, sale) => {
    if(sale.type === 'mouse' && sale.discount){
        return acc += sale.price - (1 * sale.discount);
    }else {
        return acc += sale.price;
    }
  },0)
  console.log(`moneyFromMouse: ${moneyFromMouse}`);
  
  /*
    3. From today's sales, 
    we want to know if we sold a Logitech G1 mouse,
    and if how much minus the discount
   */
  const logitech = sales.find((sale) => sale.product.toLowerCase() === 'Logitech G1'.toLowerCase());
  if(logitech && logitech.discount){
    console.log(`logitech costs ${logitech.price - (logitech.price * logitech.discount)}`);
  }else {
    console.log(`logitech consts ${logitech.price}`);
  }
  
  /*
    4. From today's sales, 
    we want to all the products that don't have discount,
    to add a discount of 0 
   */
  const noDiscountItems = sales.map((sale) => {
    if(!sale.discount) sale.discount = 0;
    return sale;
  })
  console.log(noDiscountItems);

  