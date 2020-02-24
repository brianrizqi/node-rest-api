const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        'message': "Handling from product with method GET"
    })
})

router.post('/', (req, res, next) => {
    const order = {
        product_id: req.body.product_id,
        total: req.body.total
    };
    res.status(200).json({
        'message': "Handling from product with method POST",
        'order': order
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if (id === 'levidio') {
        res.status(200).json({
            message: "Order found",
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
