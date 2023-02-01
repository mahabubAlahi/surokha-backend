//const database = require('../config/database');

const db = require('../models');


const dbService = () => {
  const authenticateDB = () => db.sequelize.authenticate();

  const dropDB = () => db.sequelize.drop();

  const syncDB = () => {
    db.sequelize.sync();
  }

  const successfulDBStart = () => (
    console.info('connection to the database has been established successfully')
  );

  const errorDBStart = (err) => (
    console.info('unable to connect to the database:', err)
  );

  const errorDBSync = (err) => (
    console.info('unable to sync to the database:', err)
  );



  const startDev = async () => {
    try {
      //for production  
      //await dropDB()
      await authenticateDB();
      //await syncDB();
      successfulDBStart();
    } catch (err) {
      return errorDBStart(err);
    }
  };

  const start = async () => {
    await startDev();
  };

  // const syncDatabase = async () => {
  //   try {
  //     await syncDB();
  //     console.log("DB Synced");
  //   } catch (err) {
  //     return errorDBStart(err);
  //   }
  // }

  return {
    start
  };
};

module.exports = dbService;