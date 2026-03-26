import mongoose from "mongoose";

const PageReportSchema = new mongoose.Schema({
    ReportID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PRReport",
        required:true
    },
    Summary:{
        type:String,
        required:true
    },
    RiskScore:{
        type:Number,
        required:true
    },
    fixes:[{
        type: {
        type: String,
        enum: ["bug", "suggestion", "optimization", "security"],
        },
        description:{
            type:String,required:true
        },
        fix:{
            type:String,required:true
        },
        level:{
            type:String,enum:["low","medium","high","critical"]
        },
        metadata:{
            lineno:{
                type:Number
            }
        }
    }]
})

const PageReport = mongoose.model('PageReport',PageReportSchema)

export default PageReport