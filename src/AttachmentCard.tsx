import React, { FC } from "react";

export const AttachmentCard: FC<{
  small?: boolean;
  s3Source: string;
}> = () => {
  return (
    <div style={{ width: "50px", height: "50px", background: "gainsboro" }} />
  );
};

export default AttachmentCard;
