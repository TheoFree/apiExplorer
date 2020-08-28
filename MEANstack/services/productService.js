const Product = require('../database/models/productModel');
const { formatMongoData, checkObjectID } = require('../helper/dbHelper');
const constants = require('../constants/index');

module.exports.createProduct = async (serviceData) => {
    try {
        let product = new Product({ ...serviceData });
        let result = await product.save();
        return formatMongoData(result);
    } catch (error) {
        throw new Error(error);
        console.log("something went wrong: Service: createProduct", error);
    }


}

module.exports.getAllProducts = async ({ skip = 0, limit = 10 }) => {
    try {
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));

        return formatMongoData(products);
    } catch (error) {
        throw new Error(error);
        console.log("something went wrong: Service: getAllProducts", error);
    }


}
module.exports.getProductByID = async ({ id }) => {
    try {
        checkObjectID(id);
        let product = await Product.findById(id);
        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error) {
        throw new Error(error);
        console.log("something went wrong: Service: getProductByID", error);
    }


}
module.exports.updateProduct = async ({ id, updateInfo }) => {
    try {
        checkObjectID(id);
        let product = await Product.findOneAndUpdate(
            {_id : id},
            updateInfo,
            {new:true}
        )
        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error) {
        throw new Error(error);
        console.log("something went wrong: Service: updateProduct", error);
    }


}
module.exports.deleteProductById = async ({ id}) => {
    try {
        checkObjectID(id);
        let product = await Product.findByIdAndDelete(id);
        if (!product) {
            throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    } catch (error) {
        throw new Error(error);
        console.log("something went wrong: Service: deleteProductById", error);
    }


}