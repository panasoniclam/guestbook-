const mongoose = require('mongoose')
const Schema = mongoose.Schema ;
const signatureSchema = new Schema({
    guestSignature:{
        type:Schema.Types.Mixed,
        required:true
    },
    message:{
        type:Schema.Types.Mixed,
        required:true
    }
})

const signature = mongoose.model('signature',signatureSchema)