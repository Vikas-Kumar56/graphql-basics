export const Subscription = {
  count:{
      subscribe(parent,args,{ pubSub },info){
          let count = 0;
          
          setInterval(() => {
            count++;
            pubSub.publish('count',{
                count
            });
          },1000);

          return pubSub.asyncIterator('count');
      }
  },
  comment:{
     subscribe(parent,{postId},{pubSub,db},info){
       const post = db.Posts.find(post => post.id === postId);

       if(!post){
           throw new Error('No post exist with this id');
       }

       return pubSub.asyncIterator(`comment ${postId}`);
     }
  },
  post:{
      subscribe(parent,args,{pubSub},info){
          return pubSub.asyncIterator('post');
      }
  }
}