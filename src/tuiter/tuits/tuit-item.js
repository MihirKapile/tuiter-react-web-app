import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faUpload, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";
import { BsXLg } from 'react-icons/bs'


const TuitItem = (
 {
   tuit = {
     "userName": "SpaceX",
     "handle": "@spacex",
     "time": "2h",
     "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
     "image": "tesla.png",
     "replies":"123",
     "retuits":"432",
     "likes":"2345"
   }
 }
) => {
const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
   dispatch(deleteTuit(id));
 }

 return(
  <li className="list-group-item">
   <div className="row">
   <div className="col-1">
        <img className="rounded-circle" height={48} src={`/images/${tuit.image}`}/>
   </div>
     <div className="col-10">
       <BsXLg className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}/>
       <div> <span className ="icon"> {tuit.userName} <FontAwesomeIcon icon={faCheckCircle}/> </span>{tuit.handle} . {tuit.time}</div>
       <div>{tuit.tuit}</div>
       <div className="d-flex align-items-center">
              <span className="icon mx-5">
                    <FontAwesomeIcon icon={faComment} /> {tuit.replies}
              </span>
              <span className="icon mx-5">
                    <FontAwesomeIcon icon={faRetweet} /> {tuit.retuits}
              </span>
              <span className="icon mx-5">
                    <FontAwesomeIcon icon={faHeart} /> {tuit.likes}
              </span>
              <span className="icon mx-5">
                    <FontAwesomeIcon icon={faUpload} />
              </span>
       </div>
     </div>
   </div>
  </li>
 );
};
export default TuitItem;