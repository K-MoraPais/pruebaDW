import classes from "./CreateMeeting.module.scss";
import postCreateMeeting from "./postCreateMeeting";

function CreateMeeting() {
  return (
    <div className={classes.createMeeting}>
      <div>
        <button onClick={postCreateMeeting}>Test</button>
      </div>
    </div>
  );
}

export default CreateMeeting;
