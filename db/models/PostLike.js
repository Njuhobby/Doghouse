const { DataTypes } = require("sequelize");

const PostLike = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Posts",
      key: "id",
    },
    allowNull: false,
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "id",
    },
    allowNull: false,
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  },
};

module.exports = PostLike;
