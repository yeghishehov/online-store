const Shoes = require('../models/shoes')

module.exports.add = async (req, res) => {
    try {
        const {shoesName, type, collectionName, price, description, color} = req.body
        const sizes = req.body.sizes ? req.body.sizes.split(' ') : []
        const imagesSrc = req.files ? req.files.map(file => file.path.replace(/\\/g, '/')) : []

        const shoes = new Shoes({ shoesName, type, collectionName, price, sizes, description, color, imagesSrc })

        await shoes.save();

        res.status(201).json({ message: 'Product is added'})

    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.all = async (req, res) =>  {
    try {
        const shoes = await Shoes.find()
        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }

        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}
