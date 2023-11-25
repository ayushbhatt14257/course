const Products = require("./models/productsSchema");

const productData = require("./constant/productsdata");

const DefalutData = async() => {
    try {

        await Products.deleteMany({});

        const storeData = await Products.insertMany(productData);
        // console.log(storeData);
    } catch (error) {
        console.log(error);
    }
}

module.exports = DefalutData;