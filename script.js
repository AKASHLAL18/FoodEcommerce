const foodItems = [
    {
      name: "Chicken Biryani",
      price: 90,
      image: "https://via.placeholder.com/200x150?text=Chicken+Biryani"
    },
    {
      name: "Egg Biryani",
      price: 75,
      image: "https://via.placeholder.com/200x150?text=Egg+Biryani"
    },
    {
      name: "Egg Fried Biryani",
      price: 85,
      image: "https://via.placeholder.com/200x150?text=Egg+Fried+Biryani"
    },
    {
      name: "Chilli 65 Biryani",
      price: 90,
      image: "https://via.placeholder.com/200x150?text=Chilli+65+Biryani"
    },
    {
      name: "Gilma Biryani",
      price: 110,
      image: "https://via.placeholder.com/200x150?text=Gilma+Biryani"
    },
    {
      name: "Empty Biryani",
      price: 60,
      image: "https://via.placeholder.com/200x150?text=Empty+Biryani"
    }
  ];
  
  let cartCount = 0;
  let cartTotal = 0;
  
  const foodItemsDiv = document.getElementById("food-items");
  const cartCountEl = document.getElementById("cart-count");
  const cartTotalEl = document.getElementById("cart-total");
  
  foodItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "food-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p class="price">₹${item.price}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;
  
    const button = card.querySelector(".add-to-cart");
    button.addEventListener("click", () => {
      cartCount++;
      cartTotal += item.price;
      cartCountEl.innerText = `Items: ${cartCount}`;
      cartTotalEl.innerText = `Total: ₹${cartTotal}`;
    });
  
    foodItemsDiv.appendChild(card);
  });
  
  function goToOrderPage() {
    localStorage.setItem("cartCount", cartCount);
    localStorage.setItem("cartTotal", cartTotal);
    window.location.href = "order.html";
  }
  