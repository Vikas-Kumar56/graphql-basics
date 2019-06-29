export const Post = {
    author(parent,args,{db},info){
        return db.Users.find(user => user.id === parent.author);
    },
    comments(parent,args,{db},info){
        return db.Comments.filter(comment => comment.post === parent.id);
    }
};