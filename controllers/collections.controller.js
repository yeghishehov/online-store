const Shoes = require('../models/shoes')

module.exports.men = async (req, res) => {
    try {
        const shoes = await Shoes.find({ 'collection_name': 'men' })        
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
        const shoes = await Shoes.find({ 'collection_name': 'women' })        
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
        const shoes = await Shoes.find({ 'collection_name': 'outlet' })        
        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }
        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.flatRate46 = async (req, res) => {
    try {
        const shoes = await Shoes.find({ 'collection_name': 'flatRate46' })        
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
        const shoes = await Shoes.find({ 'collection_name': 'accesories' })        
        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }
        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.womenTextile = async (req, res) => {
    try {
        const shoes = await Shoes.find({ 'collection_name': 'womenTextile' })        
        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }
        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.summerSpecialSelection = async (req, res) => {
    try {
        const shoes = await Shoes.find({ 'collection_name': 'summerSpecialSelection' })        
        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }
        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}