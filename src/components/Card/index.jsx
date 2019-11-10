import React from 'react';
import {
    DocumentCard,
    DocumentCardActivity,
    DocumentCardPreview,
    DocumentCardTitle,
  } from 'office-ui-fabric-react/lib/DocumentCard';
  import { ImageFit } from 'office-ui-fabric-react/lib/Image';
//   import { TestImages } from '@uifabric/example-data';

const Card = ({name, avatar, phone, post, email, cabinet}) => {
  const previewProps = {
    previewImages: [
      {
        name: name,
        linkProps: {
          href: 'http://bing.com',
          target: '_blank'
        },
        previewImageSrc: avatar,
        width: 318,
        height: 196
      }
    ]
  };

    return ( 
      <div>
        <DocumentCard
          aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
          onClickHref="http://bing.com"
        >
          <DocumentCardPreview {...previewProps} />
          <DocumentCardTitle
            title={name}
            shouldTruncate={true}
          />
          <DocumentCardActivity
            activity="Created a few minutes ago"
            people={[{ name: 'Annie Lindqvist' }]}
          />
        </DocumentCard>
      </div>
     );
}
 
export default Card;


 