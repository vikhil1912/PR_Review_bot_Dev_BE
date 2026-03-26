import mongoose from "mongoose"

const PRReportSchema = mongoose.Schema({
    UserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    Metadata:{
        PRUrl:{
            type:String,required:true
        },
        Owner:{
            type:String,
            required:true
        },
        repository:{
            type:String,required:true
        },
        PRno:{
            type:Number,required:true
        }
    },
    PageReports:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PageReport'
    }]
}, { timestamps: true })

PRReportSchema.index({ UserID: 1 })

PRReportSchema.index({
  "Metadata.Owner": 1,
  "Metadata.repository": 1,
  "Metadata.PRno": 1
})

PRReportSchema.index({ UserID: 1, createdAt: -1 })


const PRReport = mongoose.model('PRReport',PRReportSchema)

export default PRReport