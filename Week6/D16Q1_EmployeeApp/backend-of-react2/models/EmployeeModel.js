import { Schema , Types , model} from "mongoose";
//Create Employee schema
const EmployeeSchema  = new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email is already in use"]
    },
    mobile:{
        type:Number
    },
    designation:{
        type:String
    },
    companyName:{
        type:String
    }
},{
    timestamps:true
})
export const EmployeeModel = model("employee",EmployeeSchema)