const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,            
            required: true,
            trim: true,
            minlength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //use getter method to format on query
        },
        username: 
        {
            type: String,
            required: true,
        },
        reactions: [
            {
                //reactionSchema needs to be implemented as subdocument schema in model              
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
});

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;