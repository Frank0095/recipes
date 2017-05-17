const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    stripeCharge: { type: Object, required: true }
});

module.exports = mongoose.model('Order', OrderSchema);