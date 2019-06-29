export const Query = {
    grades(){
        console.log(Grades);
        return [...Grades];
    },
    add(parent,args,ctx,info){
     const { numbers } = args;
     Grades = [...numbers,...Grades];
     console.log(Grades,numbers);
     return 'Grades added';
    },
    greeting(parent,args,ctx,info){
    //  console.log(`
    //  Parent: ${JSON.stringify(parent)} 
    //  Args: ${JSON.stringify(args)} 
    //  ctx:${JSON.stringify(ctx)} 
    //  info: ${JSON.stringify(info)}` );

     if(args.name){
         return `Hello ${args.name}`;
     }
     return 'Hello';
    },
    hello(){
        return 'Hello GraphQL!';
    },
    me(){
        return Users[0];
    },
    post(parent,args,{db},info){
        return db.Posts.filter(pst => {
           if(args.query){
               return pst.title.toLowerCase().includes(args.query.toLowerCase());
           }
           return true;
        });
    },
    users(parent,args,{db},info){
        return db.Users;
    },
    comments(parent,args,{db},info){
      return db.Comments;
    }
};