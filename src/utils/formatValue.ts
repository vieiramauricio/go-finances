const formatValue = (value: any): string => {
  // return 'kkk';
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value); // TODO
};
export default formatValue;
