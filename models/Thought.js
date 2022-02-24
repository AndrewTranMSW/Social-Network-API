const { Schema, model } = require("mongoose");
const moment = require("moment");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //moment
      get: (timestamp) => moment(timestamp).format("MMM Do, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
//virtual property 'reactionCount'
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reaction.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
