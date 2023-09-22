import mongoose from 'mongoose';

const products = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Provide a name'],
        minLength: 2,
    },
    price: {
        type: Number,
        required: [true, 'Please Provide a price'],
    },
    category: {
        type: String,
        required: [true, 'Please Provide a category'],
    },
    rating: {
        type: Number,
        required: [true, 'Please Provide a rating'],
    },
    reviews: {
        type: String,
        required: [true, 'Please Provide reviews'],
    },
    productType: {
        type: String,
        required: [true, 'Please Provide a productType'],
    },
    productURL: {
        type: String,
        required: [true, 'Please Provide a productURL'],
    },
    brand: {
        type: String,
        required: [true, 'Please Provide a brand'],
    }
})

export default mongoose.model('products', products);