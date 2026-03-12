import {Schema, Types, model} from 'mongoose'


//Create cart schema {product, count}
const cartSchema = new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"//Name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})



//Create User schema
const userSchema = new Schema({
    username:{
        type: String,
        required:[true,"Username is required"],
        minLength:[4,"Min length must be 4 chars"],
        maxLength:[10,"Username size exceed 9 chars"]
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    email:{
        type:String,
        required:[true,"Email required"],   
        unique:[true,"Email already existed"]
    },
    age:{
        type:Number
    },
    cart:[cartSchema]

}, {
    //versionKey = 1
    timestamps: true,
})
//string -- js datatype
//String -- Mongoose schema type
//Generate UserModel
export const UserModel = model("user",userSchema)