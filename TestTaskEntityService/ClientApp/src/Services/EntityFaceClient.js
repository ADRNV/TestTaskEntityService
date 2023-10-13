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

      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "{\r\n  \"id\": \"3fa85f64-5717-4562-b3fc-2c963f66afa6\",\r\n  \"name\": \"string\",\r\n  \"shortName\": \"string\",\r\n  \"activityType\": \"string\",\r\n  \"tin\": \"string\",\r\n  \"msrn\": \"string\",\r\n  \"bankProps\": [\r\n    {\r\n      \"id\": \"3fa85f64-5717-4562-b3fc-2c963f66afa6\",\r\n      \"name\": \"strddsading\",\r\n      \"bic\": 0,\r\n      \"settlementCheck\": \"string\",\r\n      \"correspondentCheck\": \"string\"\r\n    }\r\n  ],\r\n  \"hasOffice\": true,\r\n  \"registrationDate\": \"2023-10-13T14:52:16.781Z\"\r\n}";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch("https://localhost:7239/Entity/api/create", requestOptions)
 
      //const instance = axios.create({
      //  baseURL: "https://localhost:7239/Entity/api/",
      //  timeout: 1000,
      //});
//
//
      //var body = JSON.stringify(entity)
//
      //var response = await instance.post("create",body,{
      //  headers: {
      //    'Content-Type': 'application/json'
      //  }
      //})
      //console.log(response)
    }
}