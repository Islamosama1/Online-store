const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');

class BrandController {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async get(req,res){
        const {id} = req.params
        const brand = await Brand.findOne({where: {id}})
        return res.json(brand)
    }

    async delete(req,res){
        const {id} = req.params
        const brand = await Brand.destroy({where: {id}})
        return res.json(brand)

    }

    async deleteAll(req,res){
        const brand = await Brand.destroy({where: {}, truncate: true})
        return res.json(brand)
    }

    async update(req,res){
        const {id} = req.params
        const {name} = req.body
        const brand = await Brand.update({name}, {where: {id}})
        return res.json(brand)
    }
}

module.exports = new BrandController()