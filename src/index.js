import { GraphQLServer, PubSub } from "graphql-yoga";
import db from "./db";
import { resolvers } from "./resolver";

//let { Users,Comments,Posts } = db;
let Grades = [10];
const pubSub = new PubSub();
const server = new GraphQLServer({
    typeDefs:'./src/schema.graphql',resolvers,context:{
        db,pubSub
    }
});

server.start(() => {
    console.log(`Server is running ${process.env.PORT}`);
});