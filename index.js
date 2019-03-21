var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm fuzzy socks',
    image: 'https://weareyoung.ru/wa-data/public/shop/products/87/03/387/images/1645/1645.500.jpg',
    inventory: 12,
    details: ["80% хлопка", "20% полиэстра", "5% шерсти"],
    variants: [{
        variantId: 101,
        variantColor: "lightgrey",
        variantImage: "https://weareyoung.ru/wa-data/public/shop/products/87/03/387/images/1645/1645.500.jpg",
      },
      {
        variantId: 102,
        variantColor: "orange",
        variantImage: "https://weareyoung.ru/wa-data/public/shop/products/87/03/387/images/1648/1648.500.jpg",
      }
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart -= 1
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  },
})