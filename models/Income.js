const moongoose = require ('mongoose')
const Schema = moongoose.Schema

const incomeSchema = new Schema({
        name: String,
        description: String,
        cost: String,
        user:
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ,
    },
    {
        timestamps:{
            createdAt : true,
            updatedAt : true,
        }

    })

module.exports = moongoose.model('Income',incomeSchema)