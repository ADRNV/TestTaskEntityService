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

      var headers = new Headers();
      headers.append("Content-Type", "application/json");

      var raw = JSON.stringify(entity)

      var requestOptions = {
        method: 'POST',
        headers: headers,
        body: raw
      };

    return fetch("https://localhost:7239/Entity/api/create", requestOptions)
  }

  static async uploadDocs(files, entityFullName){

    var data = new FormData()
    
    files.forEach(file => {
      data.append('document', file)
    });

    console.log(data.entries())
    var requestOptions = {
      method: 'POST',
      body: data
    };

    return fetch(`https://localhost:7239/Entity/api/uploaddocument?entityName=${entityFullName}`, requestOptions)
  }
}