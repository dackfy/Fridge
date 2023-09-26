'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate({ Favorite }) {
      this.hasMany(Favorite, {
        foreignKey: 'recipeId',
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
