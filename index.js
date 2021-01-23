let data = {
  itemList: [
    {
      id: 1,
      name: '十全大補湯十全大補湯十全大補湯十全大補湯十全大補湯十全大補湯',
      price: 100,
      amount: 10,
    },
    {
      id: 2,
      name: '東山鴨頭',
      price: 200,
      amount: 3,
    },
    {
      id: 3,
      name: '花雕雞麵',
      price: 90,
      amount: 100,
    },
  ],
  total: 0,
  lastId: '',
  input: {
    name: '',
    price: 0,
    amount: 0,
  },
  hasError: false,
};

let vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    addItem() {
      console.log(this.lastId);
      console.log(this.itemList[this.itemList.length - 1].id);
      if (this.lastId.length === 0) {
        this.lastId = this.itemList[this.itemList.length - 1].id;
      }
      let { name, price, amount } = this.input;
      this.itemList.push({
        name,
        price,
        amount,
        id: this.lastId++,
      });
      this.input = {
        name: '',
        price: 0,
        amount: 0,
      };
      this.countTotal();
    },
    countTotal() {
      const itemsCount = data.itemList.map((item) => item.price * item.amount);
      this.total = itemsCount.reduce((accum, curr) => accum + curr);
    },
    deleteItem(id) {
      const newList = this.itemList.filter((item) => item.id !== id);
      this.itemList = newList;
      this.countTotal();
    },
  },
});
