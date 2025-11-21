const register = (req, res) => {
    const { name, phone, address, email, password } = req.body;

    if (!name || !email || !password){
        return res
          .status(400)
          .json({ message: 'name, email, password are required' });
    }

    res
       .status(201)
       .json({
            status: 'success',
            action: 'register',
            data: { name, phone, address, email }
       });
};

const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password){
        return res
           .status(400)
           .json({ message: 'email and password are required'});
    }

    res
        .status(200)
        .json({
            status: 'success',
            action: 'login ',
            data: { email }
        });
};

module.exports = { register, login};
