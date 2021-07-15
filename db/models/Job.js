const {DataTypes} = require('sequelize');

const Job = {
    Id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    companyId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdAt:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false
    },
    type:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    jobCategory:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    postContent:{
        type: DataTypes.TEXT,
        allowNull: false
    }
};

module.exports = Job;
