import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();


let initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/about', homeController.getAboutpage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD)


    return app.use("/", router);
}
module.exports = initWebRoute;