import React, { Children, CSSProperties } from "react";

type ListItemProps = {
  text: string;
  imgSrc?: string;
  children?: React.ReactNode;
  isDrop?: boolean;
  isDropOpen?: boolean;
  handleOpenDrop?: React.Dispatch<React.SetStateAction<boolean>>;
};
const ListItem = ({
  text,
  imgSrc,
  children,
  isDrop,
  isDropOpen,
  handleOpenDrop,
}: ListItemProps) => {
  return (
    <li onClick={() => handleOpenDrop?.(!isDropOpen)}>
      <a>
        {isDrop ? (
          <>
            <img
              src={imgSrc}
              alt={text}
              style={{ marginRight: isDrop ? "1rem" : "0", marginLeft: "0rem" }}
            />
            {text}
          </>
        ) : (
          <>
            {text}
            {imgSrc ? (
              <img src={imgSrc} alt={text} style={{ marginLeft: "1rem" }} />
            ) : (
              ""
            )}
          </>
        )}
      </a>
      {isDropOpen && children}
    </li>
  );
};

export default ListItem;
