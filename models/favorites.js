module.exports = function(sequelize, Sequelize) {
    var Favorites = sequelize.define("Favorites", {
      UserId: { type: Sequelize.INTEGER },
      PostId: { type: Sequelize.INTEGER }
    });
  
    //   Tags.associate = function(models) {
    //     Tags.belongsTo(models.Category, { foreignKey: { allowNull: false } });
    //   };
  
    return Favorites;
  };
  