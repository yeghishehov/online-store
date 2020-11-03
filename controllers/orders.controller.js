const Orders = require('../models/orders')

module.exports.getOrders = async (req, res) => {
    try {
        const orders = await Orders.find()        
        if(!orders) {
            return res.status(400).json({ message: 'Orders not found'})
        }
        res.json(orders)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.create = async (req, res) => {
    try {
        const { order } = req.body
        if (!order) {
            res.status(400).json('Order not received')
        }

        const findedOrder = await Orders.findOne({ ...order })
        if (findedOrder) {
            return res.status(400).json({ message: 'Your order is already added' })
        }

        const newOrder = new Orders({ ...order })
        await newOrder.save();

        res.status(201).json({ message: 'Order is created'})
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }   

}

module.exports.remove = async (req, res) => {
    try {
        const { id } = req.params

        if (!id) {
            res.status(400).json({ message: 'Order id not received'})    
        }

        await Orders.findByIdAndDelete(id)

        res.status(200).json({ message: 'Order is removed'})
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}