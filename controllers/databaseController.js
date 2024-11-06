const { name } = require('ejs');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: 'private/database.db'
});

const User = sequelize.define('Users', {
	name: DataTypes.STRING,
	count: DataTypes.INTEGER,
});

// Creates the database and returns a promise that is resolved once the
// database is guaranteed to be created and possibly defaulted.
async function createDatabase() {
	return new Promise(async (resolve, reject) => {
		try {
			await User.sync();
			if (await User.count() == 0) {
				await User.bulkCreate([{
					name: 'julian',
					count: 0,
				},{
					name: 'alex',
					count: 0,
				}]);
			}
			resolve();
		} catch (err) {
			reject(err);
		}
	});
}

const landing_get = (req, rsp) => {
  rsp.render("database/home", { 
    title: "Home"
  });
};

const landing_post = (req, rsp) => {
  console.log(req.body);
  rsp.status(301).end();
};

const database_get = async (req, res) => {
	await User.sync();
	const users = await User.findAll();

	res.render('database/index', { title: "Users", users });
};

//const incrementCount = await name.increment('count');

//const database_post = async (req, res) => { 
//	return incrementCount;
	
//};

module.exports = {
  landing_get,
  landing_post,
  database_get,

  // front-end functions
//  database_post,

  // Non-routing functions
  createDatabase,
}
