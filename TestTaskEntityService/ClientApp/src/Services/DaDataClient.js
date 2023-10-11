import axios from "axios";
import { json } from "react-router-dom";

export default class DaDataClient{

    static token(){
        return "TOKEN";
    }
    static getNamesByTIN(tin){

        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
        var query = tin;

        var options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + this.token()
            },
            body: JSON.stringify({query: query})
        }
    
        return fetch(url, options)
    }

    static getBanlByBIC(bic){

        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank";
        var query = bic;

    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + this.token()
        },
        body: JSON.stringify({query: query})
    }

    return fetch(url, options)
    }
}