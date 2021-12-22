import {createConnection,Connection} from 'typeorm'


const connection=async()=>{
  const con=await createConnection()
};

export default connection;