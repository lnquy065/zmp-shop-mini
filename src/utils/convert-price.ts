const convertPrice = (price: string | number | Number) => price;
// price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

export default convertPrice;
