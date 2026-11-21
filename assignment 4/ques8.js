
const getFoodPrice = (foodName) => {
    if (foodName === "Burger") return 250;
    if (foodName === "Pizza") return 500;
    if (foodName === "Momo") return 150;
    if (foodName === "Chowmein") return 180;

    return -1;
};

const calculateServiceCharge = (total) => {
    return total * 0.05;
};

const calculateOrder = (foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price === -1) {
        return null;
    }

    return callback(price, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    let foodAmount = callback(foodName, quantity);

    if (foodAmount === null) {
        console.log("Invalid Food Item!");
        return;
    }

    let serviceCharge = calculateServiceCharge(foodAmount);

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", foodAmount);
    console.log("Service Charge: Rs.", serviceCharge);
    console.log("Final Amount: Rs.", foodAmount + serviceCharge);
};

const calculateFoodAmount = (price, quantity) => {
    return price * quantity;
};

generateReceipt("Suman", "Burger", 2, (foodName, quantity) => {
    return calculateOrder(foodName, quantity, calculateFoodAmount);
});
