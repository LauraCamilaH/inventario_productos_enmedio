const mongoose = require('mongoose');



const dbConnection = async () => {
    const url = `mongodb+srv://db_Laurach:lau123456@cluster0.ic52c.mongodb.net/xyzDatabase?retryWrites=true&w=majority`
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
