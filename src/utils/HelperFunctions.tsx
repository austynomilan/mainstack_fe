 export function decimalCurrency(num:number,currency?:string, noCurrency?:boolean) {
   return (noCurrency?'':(currency?currency+' ':'USD')) + Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}