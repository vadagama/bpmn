var app = new Vue({
  el: '#app',
  data: {
    brand: "KFC",
    product: 'Носки',
    description: 'Пара обалденных шерстянных носков',
    selectedVariant: 0,
    inventory: 12,
    details: ["80% хлопка", "20% полиэстра", "5% шерсти"],
    variants: [{
        variantId: 101,
        variantColor: "lightgrey",
        variantColorTitle: "Белые",
        variantQuantity: 10,
        variantImage: "https://weareyoung.ru/wa-data/public/shop/products/87/03/387/images/1645/1645.500.jpg",
      },
      {
        variantId: 102,
        variantColor: "orange",
        variantColorTitle: "Желтые",
        variantQuantity: 5,
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
    updateProduct(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})