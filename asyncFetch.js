import axios  from "axios";

// const { default: axios } = require("axios")

// const axios =require("axios")
const $http =axios.create({
    baseURL:"http://localhost:3001"
})

export const fetchData = (fn)=>{
    $http.get("/fetchData").then(res=>{
        console.log(res.data)
        fn(res.data)
    })
}
