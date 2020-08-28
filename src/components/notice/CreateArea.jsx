import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {

  return (
    <div>
      <form className="create-note">
          <input
            name="title"
            placeholder="Title"
          />

        <textarea
          name="content"
          placeholder="Add Announcement "
          rows={3}
        /><Fab>
            <AddIcon />
          </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
