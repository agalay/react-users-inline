import React from "react";
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle
} from "office-ui-fabric-react/lib/DocumentCard";
import { Text } from "office-ui-fabric-react/lib/Text";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { Modal } from "../";

import "./Card.scss";

initializeIcons();

const Card = props => {
  const { id, name, avatar, phone, post, email, cabinet, onRemove } = props;
  const previewProps = {
    previewImages: [
      {
        previewImageSrc: avatar,
        width: "100%",
        height: "100%"
      }
    ]
  };

  const iconClass = mergeStyles({
    fontSize: 13
  });

  return (
    <div>
      <DocumentCard>
        <DocumentCardPreview {...previewProps} />
        <DocumentCardTitle title={name} shouldTruncate={true} />
        <Text variant={"smallPlus"} block>
          <ul>
            <li>{post}</li>
            <li>{email}</li>
            <li>{phone}</li>
            <li>{cabinet}</li>
          </ul>
        </Text>

        <div className="iconbox">
          <Modal {...props} />
          <a href="#!" onClick={onRemove.bind(this, id)}>
            <FontIcon iconName="delete" className={iconClass} />
          </a>
        </div>
      </DocumentCard>
    </div>
  );
};

export default Card;
