const Shoes = require('../models/shoes')

module.exports.men = async (req, res) => {
    try {
        const shoes = await Shoes.find({ 'collectionName': 'Men' })        
        if(!shoes) {
            return res.status(400).json({ message: 'Collection is not existed'})
        }
        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.women = async (req, res) => {
    try {
        const shoes = await Shoes.find({ 'collectionName': 'Women' })        
        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }
        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.outlet = async (req, res) => {
    try {
        const shoes = await Shoes.find({ 'collectionName': 'Outlet' })        
        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }
        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.accesories = async (req, res) => {
    try {
        const shoes = await Shoes.find({ 'type': 'accessories' })        
        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }
        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.clothing = async (req, res) => {
    try {
        const shoes = await Shoes.find({ 'type': 'Textil' })        
        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }
        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}
