const moongoose = require ('mongoose')
const Schema = moongoose.Schema
const passport = require('passport-local-mongoose')

const userSchema = new Schema({
        name: String,
        email:{
            type: String,
            unique:true
        },
        incomes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Income'
            }
        ],
    },
    {
        timestamps:{
            createdAt : true,
            updatedAt : true,
        }

    })

userSchema.plugin(passport,{usernameField:'email'})
module.exports = moongoose.model('User',userSchema)