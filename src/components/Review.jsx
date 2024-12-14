import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export const Review = () => {
  const review = {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sdkjf sdkfj sdkfj",
    starRating: 5,
    createTime: "04-26-2004",
  };

  const defaultWords = 36;
  const [isExpanded, setIsExpanded] = useState(false);
  const splitText = review.comment.split(" ");
  const canOverflow = splitText.length > defaultWords;
  const beginText = canOverflow
    ? splitText.slice(0, defaultWords - 1).join(" ")
    : review.comment;

  const endText = splitText.slice(defaultWords - 1).join("  ");
  return (
    <div className="text-darkGreen w-fit font-serif flex flex-col bg-whiteGreen p-5 rounded-xl">
      <h2 className="text-xl font-semibold font-ubuntu flex items-center gap-2">
        Anonymous Patient
        <span className="flex">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
      </h2>
      <p className="text-xs mb-3 ">{review.createTime}</p>
      <p className="w-80">
        {beginText}{" "}
        {canOverflow && (
          <>
            {!isExpanded && <span className="font-semibold">...</span>}
            <span className={`${!isExpanded && "hidden"}`}>{endText}</span>
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              className="font-semibold"
            >
              {isExpanded ? "...show less" : "show more"}
            </span>
          </>
        )}
      </p>
    </div>
  );
};
