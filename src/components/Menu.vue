<template>
  <div class="menu_wrapper">
    <!--menu -->
    {{$route.params.items}}
    <div class="menu">
      <h3>
        ◊ Authentic handmade pizza ◊
      </h3>
      <table>
        <tbody
          v-for="item in getMenuItems"
          :key="item.name"
        >
          <!-- name and description -->
          <tr>
            <td>
              <strong>
                {{item.name}}
              </strong>
            </td>
          </tr>
          <tr>
            <td>
              <small>
                {{item.description}}
              </small>
            </td>
          </tr>
          <!-- price and size  -->
          <tr
            v-for="(option , index) in item.options"
            :key="index"
          >
            <td>{{option.size}}"</td>
            <td>${{option.price}}</td>
            <td>
              <button
                @click="addToBasket(item, option)"
                type="button"
                class='btn_green'
              >+</button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
    <!-- shopping basket  -->
    <div class='basket'>
      <h3>
        Basket
      </h3>
      <div v-if="basket.length > 0">
        <table>

          <tbody
            v-for="(item, index) in basket"
            :key="index"
          >

            <tr>

              <td>
                <button
                  class="btn_green"
                  @click='decreaseQuantity(item)'
                >&#8722;</button>
                <span>{{item.quantity}}</span>
                <button
                  class="btn_green"
                  @click='increaseQuantity(item)'
                >&#43;</button>

              </td>

              <td>{{item.name}} {{item.size}}"</td>
              <td>${{item.price * item.quantity}}</td>
            </tr>

          </tbody>

        </table>

        <p>Order total:</p>
        <button class="btn_green">Place Order</button>

      </div>
      <!-- above div is the th v-if statment  -->
      <div v-else>
        <p>{{basketText}}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      basket: [],
      basketText: "Your basket is empty",
     
    };
  },
   computed:{
     getMenuItems(){
       return this.$store.state.MenuItems;
     }
   },
  methods: {
    async addToBasket(item, option) {
      const pizzaExists = await this.basket.find(
        pizza => pizza.name === item.name && pizza.size === option.size
      );
      if (pizzaExists) {
        pizzaExists.quantity++;
        return;
      }

      this.basket.push({
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      });
    },
    removeFromBasket(item) {
      this.basket.splice(this.basket.indexOf(item), 1);
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromBasket(item);
      }
    }
  }
};
</script>




<style scoped>
h3 {
  text-align: center;
}
.menu_wrapper {
  display: flex;
  flex-direction: column;
}
.btn_green{background-color: rgb(63, 145, 63);
  color: white;
  padding: 5px 15px;
  border-radius: 5px; }
.menu,
.basket {
  background: #f1e6da;
  border-radius: 3px;
  height: 100vh;
  padding: 10px;
  margin: 10px;
}
@media screen and (min-width: 900px) {
  .menu_wrapper {
    flex-direction: row;
    justify-content: space-between;
  }
  .menu {
    width: 65vw;
  }
  .basket {
    width: 35vw;
  }
}


</style>