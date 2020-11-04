const Service = require('../service/class')

const getAllClass = async (req, res) => {
    const { data } = await Service.getAllClass()
    res.send({
        status: 1,
        data
    })
}
const getStudentInClass = async (req, res) => {
    const idClass = req.params.id;
    const { data } = await Service.getStudentInClass(idClass)
    res.send({
        status: 1,
        data
    })
}
const getStudentId = async(req, res)=> {
    const idStudent = req.params.id;
    const { data } = await Service.getStudentId(idStudent)
    res.send({
        status: 1,
        data
    })
}
module.exports = {
    getAllClass,
    getStudentId,
    getStudentInClass
}
