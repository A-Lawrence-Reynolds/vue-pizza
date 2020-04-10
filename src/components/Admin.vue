<template>
  <div class="admin_wrapper">
    <div class="current_user_wrapper">
    </div>
    <NewPizza/>
    <div class='menu_wrapper'>
      <h3>Menu</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Remove Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              pizza
            </td>
            <td>
              <button
                type='button'
                class='btn_green'
              >
                &times;
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class='order_wrapper'>
      <h3>
        Current orders (5)
      </h3>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>quantity</th>
            <th>Price</th>

          </tr>
        </thead>
        <tbody>
          <tr class='order_number'>
            
                <th colspan="4">
                    <strong>
                        Order number :4 
                    </strong>
                    <button type='button' class='btn_red'>&times;</button>

                </th>

            
          </tr>
          <tr>
              <td>pizzia</td>
              <td>9"</td>
              <td>2</td>
              <td>16.56</td>


          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import NewPizza from './NewPizza'
export default {
  name: "Admin",
  components:{
      NewPizza
  }
};
</script>

<style scoped>
.admin_wrapper{
    margin: 10px;
}
  .menu_wrapper {
    margin: 10px 0px;
    padding:10px;
    border: solid 1px #f79e38;
    }
     .order_wrapper{
    margin: 10px 0px;
    padding:10px;
    border: solid 1px #f79e38;}

     .current_user_wrapper{
         margin: 10px 0px;
    padding:10px;
    border: solid 1px #f79e38;
     }

table {
    text-align: left;
    width: 70vw;
}
.order_number th{
background-color: #dddddd;

}
.order_number button{
margin:0 10px;

    } 

</style>