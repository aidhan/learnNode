import AppService from "./core/service/app.service";
import App from "./app";

const app = new App([
    new AppService()

]) 

app.listen()
