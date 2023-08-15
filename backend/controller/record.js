const recordSchema = require('../model/recordSchema');

exports.createRecord = async(req,res) => {
    try{
        const {name,email,phone_number} = req.body;

        const response = await recordSchema.create({
            name,
            email,
            phone_number,
        });

        res.status(200).json({
            response
        });
    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}

exports.readRecord = async(req,res) => {
    try{

        const response = await recordSchema.find();
        
        if(!response){
            return  res.status(401).send("No Record Found");
        }

        res.status(200).json({
            response
        })

    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}

exports.specialRecord = async(req,res) => {
    try{

        const {id} = req.params;

        const response = await recordSchema.findById({_id:id});

        res.status(200).json({
            response
        })

    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}

exports.deleteRecord = async(req,res) => {
    try{
        const {id} = req.params;

        const response = await recordSchema.findByIdAndDelete(id);

        res.status(200).json({
            response
        })

    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}

exports.updateRecord = async(req,res) => {
    try{
        const {id} = req.params;
        const {name,email,phone_number} = req.body;

        const response = await recordSchema.findByIdAndUpdate(id,{
            name,
            email,
            phone_number,
        })

        res.status(200).json({
            response
        })

    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}