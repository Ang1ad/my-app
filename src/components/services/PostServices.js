
export const getCurrentPostsToUser = (userId, posts) => {
    let currentPosts = []
    currentPosts = posts.filter(post =>
        {
            if(userId === post.userId){
                return post
            }
            return false;
        }
        )
        
    return currentPosts;
}