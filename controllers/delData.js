const expenseApp = require('../models/data')

exports.delData= async (req,res)=>{
    // if(expenseid == undefined || expenseid.length === 0){
    //     return res.status(400).json({success:false,message:'something went wrong'})
    // }
    try{
        const dId = req.params.id
        console.log(dId)
        await expenseApp.destroy({where:{id:dId}})
        res.status(200).json({success:true,message:'succesfull'})
    }
    catch(err){
        console.log('unable to delete')
        res.status(500).json({success:false,message:`failed at controller/delData-->${err}`})
    }
}