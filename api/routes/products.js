const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        'message': "Handling from product with method GET"
    })
})

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(200).json({
        'message': "Handling from product with method POST",
        'product': product
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id === 'levidio') {
        res.status(200).json({
            message: "Product found",
            id: id
        })
    } else {
        res.status(200).json({
            message: "No data"
        })
    }
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Updated product",
        id: id
    })
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Deleted product",
        id: id
    })
})

module.exports = router;
