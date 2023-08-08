import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faUpload, faCheckCircle ,faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";
import { BsXLg } from 'react-icons/bs'
import {updateTuitThunk, deleteTuitThunk} from "../services/tuits-thunks";


const TuitItem = (
 {
   tuit = {
     "username": "SpaceX",
     "handle": "@spacex",
     "time": "2h",
     "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
     "image": "tesla.png",
     "replies":"123",
     "retuits":"432",
     "likes":"2345",
     "dislikes":"0"
   }
 }
) => {
const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
   dispatch(deleteTuitThunk(id));
 }

 return(
  <li className="list-group-item">
   <div className="row">
   <div className="col-1">
        <img className="rounded-circle" height={48} src={`/images/${tuit.image}`}/>
   </div>
     <div className="col-10">
       <BsXLg className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}/>
       <div> <span className ="icon"> {tuit.username} <FontAwesomeIcon icon={faCheckCircle}/> </span>{tuit.handle} . {tuit.time}</div>
       <div>{tuit.tuit}</div>
       <div className="d-flex align-items-center">
              <span className="icon mx-3">
                    <FontAwesomeIcon icon={faComment} /> {tuit.replies}
              </span>
              <span className="icon mx-3">
                    <FontAwesomeIcon icon={faRetweet} /> {tuit.retuits}
              </span>
              <span className="icon mx-3">
                    <FontAwesomeIcon icon={faHeart} onClick={() => dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                                                      }/> {tuit.likes}
              </span>
              <span className="icon mx-3">
                    <FontAwesomeIcon icon={faThumbsDown} onClick={() => dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
                                                       }/> {tuit.dislikes}
              </span>
              <span className="icon mx-3">
                    <FontAwesomeIcon icon={faUpload} />
              </span>
       </div>
     </div>
   </div>
  </li>
 );
};
export default TuitItem;