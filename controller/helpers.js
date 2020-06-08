const bcrypt = require('bcryptjs');

const helpers = {};

//pour register
helpers.encryptPassword = async (password) => { //nous recevons le formulaire mot de passe
  const salt = await bcrypt.genSalt(10);  //nous générons un motif
  const hash = await bcrypt.hash(password, salt); //nous lui donnons le mot de passe et le motif que 
  return hash;                                    //nous utilisons la méthode de hach pour crypter le mot de passe 
};

//pour connecter
helpers.matchPassword = async (password, savedPassword) => {
  try {
    return await bcrypt.compare(password, savedPassword); //pour comparer le password pour connecter et le password sur la BDD
  } catch (e) {
    console.log(e)
  }
};

module.exports = helpers;
