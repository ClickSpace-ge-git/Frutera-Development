import CommentForm from "./CommentForm";

const Comment = ({
   comment,
   replies,
   setActiveComment,
   activeComment,
   updateComment,
   deleteComment,
   addComment,
   parentId = null,
   currentUserId,
}) => {
   
   const isEditing =
      activeComment &&
      activeComment.id === comment.id &&
      activeComment.type === "editing";
   const isReplying =
      activeComment &&
      activeComment.id === comment.id &&
      activeComment.type === "replying";
   const setReplyingFalse = () => {
      setActiveComment(null)
   }

   const fiveMinutes = 300000;
   const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
   const canDelete =
      currentUserId === comment.userId && replies.length === 0 && !timePassed;
   const canReply = Boolean(currentUserId);
   const canEdit = currentUserId === comment.userId && !timePassed;
   const replyId = parentId ? parentId : comment.id;
   const createdAt = new Date(comment.createdAt).toLocaleDateString();

   return (
      <div key={comment.id} className="commentsPart">
         <div className="CPUserPart">

            <div className="CPUserMyPart">
               <div className="CPUserMyPart_icon">
                  <img src="https://media.discordapp.net/attachments/1030113417811472404/1030776398765363210/default_image.png?width=612&height=612"/>
               </div>

               <div className="CPUserMyPart_UserName">{comment.username}</div>
            </div>

            <div className="CPUserMyPart_SendDate">{createdAt}</div>
            {!isEditing && <div className="CPUserMyPart_Comment">{comment.body}</div>}
            {isEditing && (
               <CommentForm
                  submitLabel="Update"
                  hasCancelButton
                  initialText={comment.body}
                  handleSubmit={(text) => updateComment(text, comment.id)}
                  handleCancel={() => {setActiveComment(null)}}
               />
            )}
            <div className="commentsPart_Actions">
               {canReply? (
                   isReplying? (
                   <CommentForm submitLabel="Answer" handleSubmit={(text) => addComment(text, replyId)} isRepling={isReplying} setReplyFalse={setReplyingFalse} hasCancelButton={true} handleCancel={setReplyingFalse}/>
               ):(
                  <div className="commentsPart_Action"
                       onClick={() => setActiveComment({ id: comment.id, type: "replying" })}>
                     Answer
                  </div>
               )): ""}

               {canEdit && (
                  <div className="commentsPart_Action"
                       onClick={() => setActiveComment({ id: comment.id, type: "editing" })}>
                     Edit
                  </div>
               )}

               {canDelete && (
                  <div className="commentsPart_Action"
                       onClick={() => deleteComment(comment.id)}>
                     Delete
                  </div>
               )}
            </div>
            
            {/* {replies.length > 0 && (
               <div className="replies">
                  {replies.map((reply) => (
                  <Comment
                     comment={reply}
                     key={reply.id}
                     setActiveComment={setActiveComment}
                     activeComment={activeComment}
                     updateComment={updateComment}
                     deleteComment={deleteComment}
                     addComment={addComment}
                     parentId={comment.id}
                     replies={[]}
                     currentUserId={currentUserId}
                  />
                  ))}
               </div>
            )} */}
         </div>
      </div>
   );
};

export default Comment;
