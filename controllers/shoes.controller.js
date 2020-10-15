const Shoes = require('../models/shoes')

module.exports.add = async (req, res) => {
    try {
        const {name, price, description, images} = req.body

        const product = await Shoes.findOne({ name })

        if (product) {
            return res.status(400).json({ message: 'Product with this name is already registered' })
        }

        const shoes = new Shoes({ name, price, description, images })

        await shoes.save();

        res.status(201).json({ message: 'Product is added'})

    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}

module.exports.all = async (req, res) =>  {
    try {
        const shoes = await Shoes.find()
        console.log(shoes)

        if(!shoes) {
            return res.status(400).json({ message: 'Product is not existed'})
        }

        res.json(shoes)
    } catch (error) {
        res.status(500).json({message: 'Error: ' + error})
    }
}