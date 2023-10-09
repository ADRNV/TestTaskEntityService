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

        var data = await instance.post("create",{
            params:{
                Id:entity.id, 
                ActivityType:entity.activityType,
                TIN:entity.tin,
                MSRN:entity.msrn,
                BIKs:["none"],
                RegistrationDate:entity.registrationDate
            }})
        console.log(data)
    }
}