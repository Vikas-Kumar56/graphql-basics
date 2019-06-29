export const User = {
    posts(parent,args,{db},info){
        return db.Posts.filter(post => post.author === parent.id);
    },
    comments(parent,args,{db},info){
        return db.Comments.filter(comment => {
            return comment.user === parent.id;
        });
    }
}