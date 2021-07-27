const { DataTypes } = require("sequelize");

const PostComment = {
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
  authorId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "id",
    },
    allowNull: false,
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
};

module.exports = PostComment;
