import React from "react";
import {Card} from 'antd';
import { getCurrentPostsToUser } from "../../services/PostServices";

const MyCardList = ({user, userPosts}) =>{
    let currentPosts = getCurrentPostsToUser(user.id, userPosts) 
    return(
        <div>
        
        {
        currentPosts.map(post =>{
            return(
                    <Card className='postCard' title={post.title} key={Math.random()} bordered={false}  headStyle={{backgroundColor: '#8A2BE2'}}>
                        <p >{post.body} </p>
                    </Card>
                    ) 
                
                } 
            )
                
        }        
        </div>
    )
}

export default MyCardList;