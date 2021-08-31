//memory section
const memory = document.getElementById('memory16');
memory.addEventListener('click', function () {
  document.getElementById('memory-cost').innerText = '180';
  netPrice();
});

const memory2 = document.getElementById('memory8');
memory2.addEventListener('click', function () {
  document.getElementById('memory-cost').innerText = '0';
  netPrice();
});

//storage
//256gb
const storage = document.getElementById('storage256');
storage.addEventListener('click', function () {
  document.getElementById('storage-cost').innerText = '0';
  netPrice();
});

//512gb
const storage = document.getElementById('storage512');
storage.addEventListener('click', function () {
  document.getElementById('storage-cost').innerText = '100';
  netPrice();
});

//1tb
const lastStorage = document.getElementById('storage1tb');
lastStorage.addEventListener('click', function () {
  document.getElementById('storage-cost').innerText = '180';
  netPrice();
});

//delivery section
const freeDelivery = document.getElementById('free-delivery');
freeDelivery.addEventListener('click', function () {
  document.getElementById('delivery-const').innerText = '0';
  netPrice();
});

const delivery = document.getElementById('delivery');
delivery.addEventListener('click', function () {
  document.getElementById('delivery-const').innerText = '20';
  netPrice();
});

// sum of all the prices

function netPrice() {
  const bestPriceCost = parseInt(document.getElementById('best-price').innerText);
  const deliveryCost = parseInt(document.getElementById('delivery-const').innerText);
  const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
  const storageCost = parseInt(document.getElementById('storage-cost').innerText);

  let netCostPrice = bestPriceCost + deliveryCost + memoryCost + storageCost;
  const totalPrice = document.getElementById('total-price');
  totalPrice.innerText = netCostPrice;
}
