let id = 0;
const clubs = [];

module.exports = {
     read: (req, res)=>{
        res.status(200).send(clubs)
    },
    create: (req, res)=>{
        const {type, brand, model} = req.body;
        clubs.push({id, type, brand, model});
        id++;
        res.status(200).send(clubs);
     },
     delete: (req,res) => {
        const {id} = req.params;
        const index = clubs.findIndex( club => club.id == id);
        clubs.splice(index, 1)
        res.status(200).send(clubs);
    },
    update: (req, res) => {
        const {id} = req.params;
        const {type, brand, model} = req.body;
        const club =  clubs.find( club => club.id == id);
        club.type = type;
        club.brand = brand;
        club.model = model;
        res.status(200).send(clubs)
    }
}