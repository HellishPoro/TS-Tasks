interface TotalPrice{
    price: number
    discount: number
    isInstallment?: boolean
    months: number
}

const totalPrice  = ({ price, discount, isInstallment, months }: TotalPrice): number => {
     let offPrice = price - (price * (discount / 100))
     if(!isInstallment){
         return offPrice
     }
     return offPrice / months
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); 