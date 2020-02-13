'use strict';

module.exports = (sequelize, DataTypes) => {
	const Task = sequelize.define('Task', {
		value: {
			type: DataTypes.STRING,
			validate: {
				isNull: false,
				notEmpty: true
			}
		},
		deadLine: {
			type: DataTypes.DATE,
			validate: {
				isNull: false,
				isDate: true
			}
		},
		userId: {
			type: DataTypes.INTEGER,
			validate: {
				isNull: false
			}
		},
		isDone: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		files: DataTypes.ARRAY( DataTypes.STRING )
	}, {} );
	Task.associate = function(models) {
		Task.hasMany( models.User, {
			foreignKey: 'userId'
		})
	};
	return Task;
};