import axios from "axios";
import { baseURL, TIMEOUT } from "./config";
import useloading from "../../store/moduels/loading";

class myaxios {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      timeout: TIMEOUT,
    });
    
    this.instance.interceptors.request.use(config=>{
const loadingstore=useloading()
      
      loadingstore.isloading=true
      return config
    },err=>{
      return err
    })
    this.instance.interceptors.response.use(res=>{
const loadingstore=useloading()

      loadingstore.isloading=false
      return res
    }),err=>{
const loadingstore=useloading()

      loadingstore.isloading=false
      return err
    }
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log("request err:", err);
          reject(err);
        })
        .finally(() => {
        });
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new myaxios(baseURL);
