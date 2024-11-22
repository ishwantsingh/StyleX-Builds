// document.getElementById('calculate-price').addEventListener('click', () => {
//     const prices = {
//         cpu: {
//             intel_i9: 400,
//             intel_i7: 300,
//             amd_ryzen9: 350,
//             amd_ryzen7: 250,
//         },
//         gpu: {
//             nvidia_rtx4090: 1200,
//             nvidia_rtx4080: 800,
//             amd_rx7900: 750,
//             amd_rx7800: 600,
//         },
//         ram: {
//             '16gb': 100,
//             '32gb': 200,
//             '64gb': 350,
//             '128gb': 700,
//         },
//         storage: {
//             '1tb_ssd': 120,
//             '2tb_ssd': 220,
//             '1tb_hdd': 60,
//             '2tb_hdd': 100,
//         },
//         cooling: {
//             air_cooling: 50,
//             liquid_cooling: 150,
//         }
//     };

//     const cpu = document.getElementById('cpu').value;
//     const gpu = document.getElementById('gpu').value;
//     const ram = document.getElementById('ram').value;
//     const storage = document.getElementById('storage').value;
//     const cooling = document.getElementById('cooling').value;

//     const totalPrice =
//         prices.cpu[cpu] +
//         prices.gpu[gpu] +
//         prices.ram[ram] +
//         prices.storage[storage] +
//         prices.cooling[cooling];

//     document.getElementById('price-display').textContent = `Total Price: $${totalPrice}`;
// });
// ``

function calculatePrice() {
    // Get the selected values for each part
    const cpuPrice = parseFloat(document.getElementById("cpu").value);
    const gpuPrice = parseFloat(document.getElementById("gpu").value);
    const ramPrice = parseFloat(document.getElementById("ram").value);
    const coolingPrice = parseFloat(document.getElementById("cooling").value);
    const storagePrice = parseFloat(document.getElementById("storage").value);
  
    // Calculate the total price by summing up the selected prices
    const totalPrice = cpuPrice + gpuPrice + ramPrice + coolingPrice + storagePrice;
  
    // Update the total price in the HTML
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  }