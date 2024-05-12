const express = require('express');
const router = express.Router();
const controller = require('./Controller/contactController')




module.exports = (app) => {

    app.get("/api/contacts", controller.GetUser)
    app.post("/api/contacts", controller.PostUser)
    app.put("/api/contacts", controller.PutUser)
    app.delete("/api/contacts/:id",controller.DeleteUser)
}
