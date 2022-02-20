const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const controller = (User) => {
  const getObj = async (req, res) => {
    const {query} = req;
    const response = await User.find(query);
    res.json(response);
  };

  const postObj = async (req, res) => {
    const user = new User(req.body);
    user.password = await bcrypt.hash( user.password, 2);
    await user.save();
    res.json(user);
  };

  const getById = async (req, res) => {
    const response = await User.findById(req.params.userId);
    res.json(response);
  };

  const putUser = async (req, res) => {
    const {body} = req;
    const response = await User.findByIdAndUpdate(
        {_id: req.params.userId},
        {
          $set: {
            firsName: body.firsName,
            lastName: body.lastName,
            userName: body.userName,
            password: await bcrypt.hash( body.password, 10),
            email: body.email,
            address: body.address,
            phone: body.phone,
          },
        },
    );
    res.json(response);
  };

  const deleteObj = async (req, res) => {
    await User.findByIdAndDelete(req.params.userId);
    res.json('Item has been deleted successfully...');
  };

  const generateToken = (savedUser) => {
    const tokenPayLoad = {
      firsName: savedUser.firsName,
      userName: savedUser.userName,
      lastName: savedUser.lastName,
    };

    return jwt.sign(tokenPayLoad, 'ultraSecreto');
  };


  const postLogin = async (req, res)=> {
    const {body} = req;
    let response = await User.findOne({
      'userName': body.userName,
    });

    if (!response) {
      console.log('no encuentra la wea');
      res.status(401).json('Invalid Credentials...');
    } else if (await bcrypt.compare(body.password, response.password)) {
      const savedUser = response;
      const token = generateToken(savedUser);
      response = {message: 'TODO OK...', token};
      res.json(response);
    } else {
      res.status(401).json('Invalid Credentials...');
    }
  };

  // eslint-disable-next-line max-len
  return {getObj, getById, postObj, putUser, deleteObj, postLogin};
};

module.exports = controller;
