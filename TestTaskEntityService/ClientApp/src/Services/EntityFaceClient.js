import axios from "axios";

export default class EntityClient{

    static async getPaged(page, size){
           const instance = axios.create({
            baseURL: "https://localhost:7239/Entity/api/",
            timeout: 1000,
          });

        var data = await instance.get("page",{params:{page:page, size:size}})
        console.log(data)
    }

    static async createEntity(entity){

        const instance = axios.create({
            baseURL: "https://localhost:7239/Entity/api/",
            timeout: 1000,
          });


        var body = JSON.stringify(entity)

        var response = await instance.post("create",body,{
            headers: {
                  'Content-Type': 'application/json'
            }
        })
        console.log(response)
    }
}