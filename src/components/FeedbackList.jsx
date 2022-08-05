import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackList() {
    //console.log(feedback)
    const { feedback,handleDelete } = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }

    return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item,index) =>
            <motion.div
              key={item.id}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
            >
              <FeedbackItem 
                key={index} 
                item={item} 
                handleDelete={handleDelete}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  // return (
  //   <div className="feedback-list">
  //       {feedback.map((item,index) =>
  //       <FeedbackItem 
  //       key={index} 
  //       item={item} 
  //       handleDelete={handleDelete}
  //       />)}
  //   </div>
  // )
}

export default FeedbackList