if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

  const express = require('express')
//   const cors = require('cors')
  // Initialize the app
  const app = express();

  
  
  let appointment = require('./service/appointment/appointmentController')

  
  
  // Setup server port
  var port = process.env.PORT || 8080;
  

//   const corsConfig = {
//        "origin": process.env.ALLOWED_CORS_URLS,
//        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//        "preflightContinue": false,
//        "optionsSuccessStatus": 204,
//        "credentials": true
//      }
//   app.use(cors(corsConfig))
//   app.use(cookieParser());
  app.use(express.json())
//   app.use(methodOverride('_method'))
//   app.use(helmet())

 app.use('/api',appointment)
  
  // Send message for default URL
  app.get('/', (req: any, res: any) => {
    res.send('Check was successful');
  
  })
//   app.all('*', (req, res, next) => next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404)))
  
//   app.use((err, req, res, next) => {
//     err.statusCode = err.statusCode || 500;
//     err.status = err.status || 'error'
//     res.status(err.statusCode).json({
//          status: err.status,
//          message: err.message
//     })
//   })
  
//   db.sequelize
//   .authenticate()
//   .then(() => {
      app.listen(port, function () {
          console.log("Running RestHub on port " + port);
        })
//   }).catch((err : any) => console.log(err));
  
  // Launch app to listen to specified port
  
  
  