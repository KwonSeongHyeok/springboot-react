import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


const Detail = () => {

    const [postList, setPostList] = useState([]);

    const postsList = async () => {
        try{
            const response = await axios.get('/posts');
            setPostList(response.data);
        } catch (error){
            console.error("게시물을 가져오는 데 실패했습니다.", error);
        }
        
    }
    useEffect(() => {
        postsList();
        console.log("postList : ", postList);
    },[]);

    return(
        <>
           <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>content</th>
                </tr>
            </thead>
            <tbody>
                {postList.map(list => (
                    <tr key={list.id}>
                        <td>{list.id}</td>
                        <td>{list.title}</td>
                        <td>{list.content}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
    
}
export default Detail;