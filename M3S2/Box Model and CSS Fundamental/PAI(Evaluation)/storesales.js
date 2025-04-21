let store =[
    { storeName: "Store A", location: "City 1", sales: [100, 200, 150, 180] },
    { storeName: "Store B", location: "City 2", sales: [200, 250, 300, 150] },
    { storeName: "Store C", location: "City 3", sales: [50, 70, 120, 80] }
  ]

  function totalSales(store){
    return store.map(store =>{
        let total =store.sales.reduce((sum,value) => sum+value,0)
        return{...store,totalSales:total}
    })
  }

  function highestSales(storewithTotals){
    return storewithTotals.reduce((maxStore,store) =>
        store.totalSales>maxStore.totalSales ? store :maxStore
    )
  }

  function lessthan1K(storewithTotals){
    return storewithTotals.filter(store =>
         store.totalSales <900).map(store =>store.storeName)
  }

  let storewithTotals = totalSales(store)
  console.log("Total sales: ")
  storewithTotals.forEach(store => {
    console.log(`${store.storeName}: ${store.totalSales}`)  
  });

  let topStore =highestSales(storewithTotals)
  console.log(`\n Store with highest sales:"${topStore.storeName}"(${topStore.totalSales})`)

  let lowsales =lessthan1K(storewithTotals)
  console.log(`\n Stores with low sales: [${lowsales.map(name => `"${name}`).join(", ")}]`)
