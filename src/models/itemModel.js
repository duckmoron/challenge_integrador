const { conn } = require('../config/conn.js');

const getAll = async (params) => {
    try {
        const [rows] = await conn.query('SELECT product_id, product_name, price, product_description, dues, image_front, image_back, licence_name FROM sql10627826.product INNER JOIN sql10627826.licence ON sql10627826.product.licence_id = sql10627826.licence.licence_id LIMIT ?;', params);
        //console.log(rows);
        return rows;
    } catch (error) {
        //console.log(error);
        return "No se pudo obtener la lista de items.";
    } finally {
        conn.releaseConnection();
    }
}

const getById = async (id) => {
    try {
        //console.log("entro al metodo", id);
        const [item] = await conn.query('SELECT product_id, product_name, price, product_description, dues, image_front, image_back, licence_name FROM sql10627826.product INNER JOIN sql10627826.licence ON sql10627826.product.licence_id = sql10627826.licence.licence_id WHERE product_id = ?;', id);
        //console.log("este es el modelo", item);
        return item [0];
    } catch (error) {
        //console.log(error);
        return "No se pudo obtener el item.";
    } finally {
        conn.releaseConnection();
    }
}

const getAll2 = async () => {
    try {
        const [rows] = await conn.query('SELECT product_id, product_name, sku, licence_name FROM sql10627826.product INNER JOIN sql10627826.licence ON sql10627826.product.licence_id = sql10627826.licence.licence_id ORDER BY sql10627826.product.product_id;');
        return rows;
    } catch (error) {
        return "No se pudo obtener la lista de items.";
    } finally {
        conn.releaseConnection();
    }
}

const getCollection = async () => {
    try {
        const [rows] = await conn.query('SELECT licence_id, licence_name, licence_description, licence_image FROM sql10627826.licence;');
        return rows;
    } catch (error) {
        return "No se pudo obtener la lista de licence.";
    } finally {
        conn.releaseConnection();
    }
}

const crearItem = async (categoria, licencia, nombre, descripcion, sku, precio, stock, descuento, cuotas) => {
    try {
        const [itemNuevo] = await conn.query(`INSERT INTO sql10627826.product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id)
        VALUES ("${nombre}", "${descripcion}", "${precio}", "${stock}", "${descuento}", "${sku}", "${cuotas}", "", "", "${licencia}", "${categoria}");`)
		return itemNuevo;
	} catch (error) {
		//console.log(error)
        return "No se pudo crear el item.";
	} finally {
		conn.releaseConnection()
	}
}

const eliminarItem = async (id) => {
    try {
        const [itemEliminado] = await conn.query('DELETE FROM sql10627826.product WHERE product_id = ?;', [id]);
        console.log(itemEliminado);
        return itemEliminado;
    } catch (error) {
        console.log(error)
        return "No se pudo eliminar el item."; 
    } finally {
        conn.releaseConnection()
    }
}

module.exports = {
    getAll,
    getById,
    getAll2,
    getCollection,
    crearItem,
    eliminarItem
}