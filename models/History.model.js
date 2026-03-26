import mongoose from "mongoose"

const HistorySchema = mongoose.Schema({
    UserID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    PRReports:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PRReport'
    }]
}, { timestamps: true })

HistorySchema.index({ UserID: 1 }, { unique: true })

const History = mongoose.model('History',HistorySchema)

export default History