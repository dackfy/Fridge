'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Recipe }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Recipe, { foreignKey: 'recipeId' });
    }
  }
  Favorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      recipeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Recipes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Favorite',
    }
  );
  return Favorite;
};
