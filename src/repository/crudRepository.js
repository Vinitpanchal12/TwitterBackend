class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = this.model.create(data);
            return result;
        } catch (error) {
            console.log('something wrong in crud');
            throw error;
        }
    }

    async destroy(id){
        try {
            const result = this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log('something wrong in crud');
            throw error;
        }
    }

    async get(id){
        try {
            const result = this.model.findById(id);
            return result;
        } catch (error) {
            console.log('something wrong in crud');
            throw error;
        }
    }

    async getAll(id){
        try {
            const result = this.model.find({});
            return result;
        } catch (error) {
            console.log('something wrong in crud');
            throw error;
        }
    }

    async update(id,data){
        try {
            const result = this.model.findByIdAndUpdate(id,data, {new:true});
            return result;
        } catch (error) {
            console.log('something wrong in crud');
            throw error;
        }
    }
}
module.exports = CrudRepository;
