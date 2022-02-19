import {ObjectId} from 'mongodb';

let todos;

export default class TodosDAO {
    // Method to connect to a specific database and collection using .env identifiers
    static async injectDB(connect) {
        if (todos) {
            return
        }
        try {
            todos = await connect.db(process.env.DB_NAME).collection(process.env.DB_COLLECTION)
        }
        catch(error) {
            console.error(`Unable to establish connection handle in todosDAO: ${error}`);
        }
    }

    // Create a todo Document in Mongo by passing in todo object
    static async addTodo(name, priority, dueDate, description) {
        try {
            
            const todoDoc = {
                name: name, 
                priority: priority, 
                dueDate: dueDate, 
                description: description,
                dateCreated: new Date()
            }
            return await todos.insertOne(todoDoc)
        } 
        catch (error) {
            console.error(`Unable to post todo: ${error}`);
            return {error: error}
        }
    }

    // Update todo Document based on Mongo ObjectId. Todo is an object of new info
    static async updateTodo(todoId, name, priority, dueDate, description) {
        try {
            const updateResponse = await todos.updateOne(
                {"_id": ObjectId(todoId)}, 
                {$set: {
                    name: name, 
                    priority: priority, 
                    description: description, 
                    dueDate: dueDate}}
            )   
            return updateResponse
        } 
        catch (error) {
            console.error(`Unable to update todo: ${error}`);
            return {error: error}
        }
    }

    // Delete todo Document based on Mongo ObjectId
    static async deleteTodo(todoId) {
        try {
            const deleteResponse = await todos.deleteOne({"_id": ObjectId(todoId)});
            return deleteResponse
        } 
        catch (error) {
            console.error(`Unable to delete todo: ${error}`);
            return {error: error}
        }
    }

    static async getTodos() {
        let cursor;
        try{
            cursor = await todos.find();
            const todosList = await cursor.toArray();
            return todosList
        }
        catch(error) {
            console.error(`Unable to issue find command, ${error}`);
            let todosList = [];
            return todosList
        }
    }
}