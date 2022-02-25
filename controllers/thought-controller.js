const { Thought, User } = require('../models');

const thoughtController = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .sort({ createdAt: -1})
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //Get a single thought by Id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId})
            .then((dbThoughtData) => {
                if(!dbThoughtData) {
                    return res.status(404).json({ message: "Thought with this ID doesn't exist"});
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //Create thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => {
                return User.findOneAndUpdate(
                    {_id: req.body.userId},
                    {$push: { thoughts: dbThoughtData._id}},
                    { new: true}
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: "Thought has been created but there's no user with this id"});
                }
                res.json({ message: "Thought has been created."});
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    //Update thought
    //Delete thought
    //Add a reaction to a thought
    //Remove a reaction from a thought





},


module.exports = thoughtController;

