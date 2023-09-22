'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate({ User }) {
      this.belongsToMany(User, {
        through: 'Favorites',
        foreignKey: 'recipeId',
        otherKey: 'userId',
      });
    }
  }
  Recipe.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      img: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      ingridients: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      instruction: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      apiId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Recipe',
    }
  );
  return Recipe;
};
