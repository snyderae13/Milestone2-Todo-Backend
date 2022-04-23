// Dependencies
import app from './server';
import * as mongodb from 'mongodb';
import dotenv from 'dotenv';
import TodosDAO from './dao/todosDAO';


async function connectToDatabase(){
    dotenv.config();

    const client : mongodb.MongoClient = new mongodb.MongoClient(process.env.ATLAS_URI!);

    const PORT = process.env.PORT || 4444;

    try {
        await client.connect()

        // Add a port listener for the app
         app.listen(PORT, () => {
             console.log(`Nomming on port: ${PORT}`);
        })
        

        const db: mongodb.Db = client.db(process.env.DB_NAME);

        const todosCollection: mongodb.Collection = db.collection(process.env.DB_COLLECTION!);

    console.log(`Success connected to database:${db.databaseName} and collection : ${todosCollection.collectionName}`)
        
    } catch (err) {
        console.error(err)
        
    }

    

    


}

connectToDatabase().catch(console.error)

// async function main() {
//     dotenv.config();

//     // Create new MongoDB Client
//     const client = new mongodb.MongoClient(
//             process.env.ATLAS_URI !, 
//             {useNewUrlParser: true, useUnifiedTopology: true}
//     );

//     // Set PORT from .env or 4444 if not assigned
//     const PORT = process.env.PORT || 4444;

//     try {
//         // Connect the MongoDB Client using TodosDAO injectDB method which will connect to the db and the appropriate collection
//         await client.connect();
//         await TodosDAO.injectDB(client);

//         // Add a port listener for the app
//         app.listen(PORT, () => {
//             console.log(`Nomming on port: ${PORT}`);
//         })
//     }
//     catch(err) {
//         console.error(err);
//         process.exit(1);
//     }
// }

// // Run the main function and catch any errors that were generated
// main().catch(console.error);