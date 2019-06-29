export const Comment = {
    post(parent,args,{db},info){
      return db.Posts.find(post => post.id === parent.post);
    },
    user(parent,atgs,{db},info){
      return db.Users.find(user => user.id === parent.user);
    }
}