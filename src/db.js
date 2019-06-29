let Users = [{
    id: '1',
    name: 'Viaks',
    email: 'Vikas@kumar.com',
    age: 24,
    address: 'mathura'
},{
    id: '2',
    name: 'neha',
    email: 'neha@kumar.com',
    age: 24,
    address: 'mathura'
},{
    id: '3',
    name: 'anuj',
    email: 'anuj@kumar.com',
    age: 20,
    address: 'mathura'
}];

let Posts = [{
    id: '1',
    title: 'GraphQl beginner',
    body: 'This is awsome post body',
    published: false,
    author: '1'
},{
    id: '2',
    title: 'GraphQl beginner',
    body: 'This is awsome post body',
    published: true,
    author: '2'
},{
    id: '3',
    title: 'GraphQl beginner',
    body: 'This is awsome post body',
    published: false,
    author: '1'
}];

let Comments = [
    {
        id: '1',
        text: 'awesome comment',
        post: '1',
        user: '2'
    },
    {
        id: '2',
        text: 'second comment',
        post: '1',
        user: '3'
    },
    {
        id: '3',
        text: 'third comment',
        post: '2',
        user: '1'
    }
];

const db = {Users,Comments,Posts};
export default db;