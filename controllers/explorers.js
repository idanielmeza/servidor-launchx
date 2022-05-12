const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAll = async(req,res)=>{

    try {
        const certifications = await prisma.missionCommander.findMany({});
        res.json(certifications);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Hubo un error vuelve a intentarlo'})
    }
    
}

const getById = async(req,res)=>{
    const id = req.params.id;
    try {
        const certification = await prisma.missionCommander.findUnique({ where: { id: parseInt(id) } });
        res.json(certification);
    } catch (error) {
        console.loh(error);
        res.status(500).json({msg:'Hubo un error vuelve a intentarlo.'})
    }
    
}

const postExplorer = async(req,res)=>{
    const {name,username,mission} = req.body
    try {
        await prisma.missionCommander.create({
            data: {
                name,
                username,
                mainStack: mission
            }
        })
    
        return res.json({msg:'Usuario agregado correctamente.'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Hubo un error vuelve a intentarlo.'})
    }

}

const putExplorer = async(req,res)=>{

    try {
        await prisma.missionCommander.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                name : req.body.name,
                username : req.body.username,
                mainStack : req.body.mission,
                currentEnrollment : req.body.currentEnrollment,
                hasAzureCertification : req.body.hasAzureCertification
            }
        })

        res.json({msg:'Usuario actualizado'})
    } catch (error) {
        console.loh(error)
        res.status(500).json({msg:'Hubo un error vuelve a intentarlo'})
    }
    

}

const deleteExplorer = async(req,res)=>{
    try {
        await prisma.missionCommander.delete({
            where:{
                id: parseInt(req.params.id)
            }
        })
        res.json({msg:'Usuario eliminado correctamente.'})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'Hubo un error'})   
    }
    
}

module.exports = {
    getAll,
    getById,
    postExplorer,
    putExplorer,
    deleteExplorer
}