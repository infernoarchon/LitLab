module.exports = function(sequelize, Sequelize) {
  var Posts = sequelize.define("Posts", {
    PostTitle: { type: Sequelize.STRING },
    PostDescription: { type: Sequelize.TEXT },
    UserId: { type: Sequelize.INTEGER},
    Category: { type: Sequelize.STRING }
  });

  Posts.associate = function(models) {
    Posts.belongsTo(models.User, { foreignKey: { allowNull: false } });
  };

  return Posts;
};
