import React, { useState } from "react";
import { Dialog, DialogType } from "office-ui-fabric-react/lib/Dialog";
import { EditForm } from "../";

import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

const iconClass = mergeStyles({
  fontSize: 13
});

initializeIcons();

const DialogLargeHeaderExample = props => {
  let [hideDialog, setDialog] = useState(true);
  return (
    <div>
      <a href="#!" onClick={() => setDialog(false)}>
        <FontIcon iconName="edit" className={iconClass} />
      </a>
      <Dialog
        hidden={hideDialog}
        onDismiss={() => setDialog(true)}
        dialogContentProps={{
          type: DialogType.largeHeader,
          title: "Edit card"
        }}
        modalProps={{
          isBlocking: false,
          styles: { main: { maxWidth: 450 } }
        }}
      >
        <EditForm {...props} setDialog={setDialog} />
      </Dialog>
    </div>
  );
};

export default DialogLargeHeaderExample;
