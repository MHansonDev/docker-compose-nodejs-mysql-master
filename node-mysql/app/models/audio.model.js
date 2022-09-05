module.exports = (sequelize, Sequelize) => {
  const Audio = sequelize.define("audio", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Audio;
};
