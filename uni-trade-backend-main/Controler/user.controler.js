const { registermodel } = require('../model/register.model');

const getuser = async (req, res) => {
    let id = req.params.id;
    try {
        let user = await registermodel.findById(id);
        if (user) {
            const { password, ...otherdetails } = user._doc
            res.status(200).json(otherdetails);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateuser = async (req, res) => {
    let id = req.params.id;
    let { currentUseriId } = req.body;
    if (id !== currentUseriId) {
        res.status(403).json("Access Denied")
    }


    try {
        let user = await registermodel.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).json(user)

    } catch (e) {
        res.status(500).json(e)

    }

}

const deleteuser = async(req , res) => {
    let id = req.params.id;
    
}

module.exports = { getuser, updateuser };
