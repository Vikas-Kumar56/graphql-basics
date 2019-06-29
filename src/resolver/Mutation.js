import uuidv4 from "uuid/v4";
export const Mutation = {
    createUser(parent,args,{db},info){
        const isEmailTaken = db.Users.some(user => user.email === args.user.email);
        if(isEmailTaken){
           throw new Error('Email is already taken!');
        }

        const user = {
            id: uuidv4(),
            name: args.user.name,
            email: args.user.email,
            age: args.user.age,
            address: args.user.address
        };

        db.Users.push(user);

        return user;
    },
    deleteUser(parent,args,{db},info){
      const userIndex = db.Users.findIndex(user => user.id === args.id);

      if(userIndex === -1){
          throw new Error('User does not exist!');
      }

      const user = db.Users.splice(userIndex,1);
      return user;
    },
    createPost(parent,args,{ db, pubSub },info){
        const duplicateTitle = db.Posts.some(post => post.title === args.title);
        if(duplicateTitle){
            throw new Error("Title already exists!");
        }

        const isUserExist = db.Users.some(user => user.id === args.author);
        if(!isUserExist){
            throw new Error('user does not exist');
        }

        const post = {
            id: uuidv4(),
            title: args.title,
            body: args.body,
            published: args.published,
            author: args.author
        };

        db.Posts.push(post);
        pubSub.publish('post',{
            'post':{
                mutation: 'CREATED',
                data: post
            }
        });
        return post;
    },
    deletePost(parent,args,{db},info){
      const postIndex = db.Posts.findIndex(post => post.id === args.id);
      if(postIndex === -1){
          throw new Error("Post does not exist");
      }
     
     const deletedPost = db.Posts.splice(postIndex,1);
     db.Comments = db.Comments.filter(comment => comment.post !== args.id);
     return deletedPost;

    },
    createComment(parent,args,{ db, pubSub },info){
        const isValidPostId = db.Posts.some(post => post.id === args.post);
        if(!isValidPostId){
            throw new Error('In Valid Post id');
        }

        const isValidUserId = db.Users.some(user => user.id === args.user);
        if(!isValidUserId){
            throw new Error('InValid User id!');
        }
        const comment = {
            id: uuidv4(),
            text: args.text,
            user: args.user,
            post: args.post
        };

        db.Comments.push(comment);
        // publish this post corresponding channel 'comment postId'
        pubSub.publish(`comment ${args.post}`,{
            comment
        });
        return comment;
    }
  };