const { products } = require("../db.json");
const db = require('../database/database');

module.exports = {

    getProducts: async (req, res ) => {
        const usrs = await db.query('SELECT * FROM users');
        console.log(req.body);
        res.json({ 
            products: products,
            users: usrs,
            route: "Route /products",
            method: "GET"
        });
    },
    
    addProduct: ( req, res ) => {
        console.log(req.body);
        //const product = req.body.name;
        const { name } = req.body; // Another way to do the same as the past line

        //product.push({
        //    name: name
        //});

        //Another way to do the same as the past push()
        products.push({
            name,
            id: products.length
        });

        res.json({
            msg: "Product Added",
            success: true,
            route: "Route /products",
            method: "POST"
        });
    },

    updateProduct: (req, res) => {
        console.log(req.params);
        console.log(req.body);

        const { id } = req.params;
        const { name } = req.body;

        products.forEach((product, index) => {
            if ( product.id === Number(id) ) {
                product.name = name;
            }
        });

        res.json({
            msg: "Product Updated",
            success: true,
            route: "Route /products/:id",
            method: "PUT"
        });
    },

    deleteProduct: (req, res) => {
        console.log(req.params);
        console.log(req.body);

        const { id } = req.params;
        const { name } = req.body;

        products.forEach((product, index) => {
            if ( product.id === Number(id) ) {
                products.splice( index, 1 );
            }
        });
        
        res.json({
            msg: "Product Deleted",
            success: true,
            route: "Route /products/:id",
            method: "DELETE"
        });
    },

}