export function formatToReadableDate(timestamp) {
  const date = new Date(timestamp);
  
  const day = date.getDate(); 
  const month = date.toLocaleString('default', { month: 'long' }); 
  const year = date.getFullYear(); 

  return `${day} ${month}, ${year}`;
}
