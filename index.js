var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm fuzzy socks',
    img: 'https://img.znak.com/1904493.jpg',
    inventory: 12,
    details: ["80% хлопка", "20% полиэстра", "5% шерсти"],
    variants: [
      { 
        variantId: 101,
        variantColor: "red",
      },
      {
        variantId: 102,
        variantColor: "green",
      }
    ],
  } 
})