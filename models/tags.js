module.exports = function(sequelize, Sequelize) {
  var Tags = sequelize.define("Tags", {
    PostId: { type: Sequelize.INTEGER },
    TagName: { type: Sequelize.STRING }
  });

  //   Tags.associate = function(models) {
  //     Tags.belongsTo(models.Category, { foreignKey: { allowNull: false } });
  //   };

  return Tags;
};
