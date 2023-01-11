// {
//     "/api/*":{
//         "target": "http://localhost:8000",
//         "secute":false,
//         "logLevel":"debug"
//     }
// }

const PROXY_CONFIG=[
    {
        context:["/","/search"],
        target:"http://127.0.0.1:8000",
        secure:false,
        logLevel:"debug",
        bypass: function(req,res, proxyOptions){
            res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:8000")
        }
    }
];


module.exports = PROXY_CONFIG;