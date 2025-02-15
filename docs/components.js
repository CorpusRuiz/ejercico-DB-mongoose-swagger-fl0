module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"title of task",
                        example:"Task1"
                    },  
                    completed:{
                        type:'boolean',
                        description:"The status of the task",
                        example: true
                    },
                }
            }
        }
    }
}