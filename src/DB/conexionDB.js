const mongoose = require('mongoose');



const dbConnection = async () => {
    if(mongoose.connection.readyState == 1) return; //Ya está conectado
    //const url = `mongodb+srv://db_Laurach:lau123456@cluster0.ic52c.mongodb.net/xyzDatabase?retryWrites=true&w=majority`
    //const url = `mongodb://pruebas:123@192.168.0.77:27017/pruebas?authSource=pruebas`
    const url = process.env.URLMONGO
    try {

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(`Base de datos ${mongoose.connection.readyState == 1 ? 'contectado' : 'no conectado'}`);

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}

module.exports = {
    dbConnection
}
