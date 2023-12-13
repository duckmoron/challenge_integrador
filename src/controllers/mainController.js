const ItemModel = require('../models/itemModel.js')

const mainControllers = {
    homeView: async (req, res) => {
        const items = await ItemModel.getAll(5);
        // const collactions = await ItemModel.getCollection();
        const prodHome = await ItemModel.getItemLicence();
        res.render('home', {
            view: {
                title: "Home | Funkoshop"
            },
            items: items,
            prodHome: prodHome
            //collactions: collactions
        });
    },
    contactView: async (req, res) => {
        //res.send('Ruta de página de Contacto'),
        res.render('contact', {
            view: {
                title: "Contacto | Funkoshop"
            }
        })
    },
    aboutView: (req, res) => res.send('Ruta de página sobre Nosotros'),
    faqsView: (req, res) => res.send('Route for Faqs View')
}

module.exports = mainControllers;