Vue.component ('product', {
  template: `
  <div class="product">
  <section class="section">
  <div id="app" class="container">
      <div class="box">
          <article class="media">
              <div class="media-left">
                  <figure class="image is-128x128 is-1by1">
                      <img v-bind:src="image" v-bind:alt="image">
                  </figure>
              </div>
              <div class="media-content">
                  <div class="product-info">
                      <p class="title is-3">{{ title }}</p>
                      <p class="subtitle is-5">{{ description }}</p>
                      <div>
                          <p v-if="inventory > 10" class=""><i class="fas fa-crow"></i>In stock</p>
                          <p v-else-if="inventory <= 10 & inventory > 0">Almost in stock</p>
                          <p v-else="inventory > 0">Out of stock</p>
                      </div>
                      <div class="product-details">
                          <ul>
                              <li v-for="detail in details">{{ detail }}</li>
                          </ul>
                      </div>
                      <div v-for="(variant,index) in variants" :key="variant.variantId" class="tag is-light"
                          :style="{backgroundColor: variant.variantColor}"
                          @mouseover="updateProduct(index)">
                          <p>{{variant.variantColorTitle}}</p>
                      </div>
                      <div>
                          <i class="button" @click="addToCart">Добавить</i>
                          <i class="button" @click="removeFromCart">Удалить</i>
                          <p>Cart({{cart}})</p>
                      </div>
                  </div>
              </div>
              </article>
      </div>
      
  </div>
</section>
</div>
  `,
  data() {
    return {
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
    }
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
var app = new Vue ({
  el: '#app',
  data: {
    premium: {
      type: Boolean,
      required: true
    }
  }
})