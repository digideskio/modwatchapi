"use strict";var express=require("express"),bodyParser=require("body-parser"),cookieParser=require("cookie-parser"),methodOverride=require("method-override"),session=require("express-session"),cors=require("cors"),morgan=require("morgan"),app=express(),http=require("http"),path=require("path"),jwt=require("jsonwebtoken"),mongoose=require("mongoose/"),configDB;configDB=process.env.OPENSHIFT_NODEJS_PORT||process.env.OPENSHIFT_NODEJS_IP?require("../config/db.js").getNewLive(process.env.DBUSERNAME,process.env.DBPASSWORD):require("../config/db.js").getDev(process.env.DBUSERNAME,process.env.DBPASSWORD),mongoose.connect(configDB);var ipaddress=process.env.OPENSHIFT_NODEJS_IP||"127.0.0.1",port=process.env.OPENSHIFT_NODEJS_PORT||3001,corsOptions={origin:!0,methods:["GET","POST"]};app.set("port",port),app.set("ip",ipaddress),app.set("views",path.join(__dirname,"views")),app.set("view engine","html"),app.use(cors()),app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!1})),app.use(morgan(process.env.OPENSHIFT_NODEJS_IP?void 0:"dev")),app.use(methodOverride()),app.use(cookieParser()),app.use(session({secret:process.env.DBEXPRESSSECRET,resave:!1,saveUninitialized:!1})),app.use(express["static"](path.join(__dirname,"public"))),app.use(cors(corsOptions));var scriptVersion={.2:"0.27",.3:"0.3.1"};require("./routes.js")(app,jwt,scriptVersion),http.createServer(app).listen(app.get("port"),app.get("ip"),function(){console.log("Express server listening at "+app.get("ip")+":"+app.get("port"))});
//# sourceMappingURL=app.js.map
