import exp from 'express'
import { EmployeeModel } from '../models/EmployeeModel.js'
export const EmployeeApp = exp.Router()

//Add data
EmployeeApp.post("/create",async(req,res)=>{
    const newEmp = req.body
    const newEmpDocument = new EmployeeModel(newEmp)
    const result = await newEmpDocument.save()
    console.log("result : ",result)
    res.status(201).json({message:"Employee created"})
})
//Get all data
EmployeeApp.get("/get-all",async(req,res)=>{
    const result = await EmployeeModel.find()
    res.status(200).json({message:"All Employees",data:result})
})
//Edit employee
EmployeeApp.put("/edit/:id",async(req,res)=>{
    const empId = req.params.id
    const updatedEmp = req.body
    await EmployeeModel.findByIdAndUpdate(empId,updatedEmp)
    res.status(200).json({message:"Employee updated"})
})
//Delete employee
EmployeeApp.delete("/delete/:id",async(req,res)=>{
    const empId = req.params.id
    await EmployeeModel.findByIdAndDelete(empId)
    res.status(200).json({message:"Employee deleted"})
})