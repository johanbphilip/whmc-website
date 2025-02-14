import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import useScreenSize from '../customHooks/useScreenSize';

export const Review = () => {
  const review = {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sdkjf sdkfj sdkfj',
    starRating: 5,
    createTime: '04-26-2004',
  };
  const screenSize = useScreenSize();
  const defaultWords = screenSize === 'xs' ? 12 : 36;
  const [isExpanded, setIsExpanded] = useState(false);
  const splitText = review.comment.split(' ');
  const canOverflow = splitText.length > defaultWords;
  const beginText = canOverflow
    ? splitText.slice(0, defaultWords - 1).join(' ')
    : review.comment;

  const endText = splitText.slice(defaultWords - 1).join('  ');
  return (
    <div className="xxs:p-3 flex w-fit flex-col rounded-xl bg-whiteGreen font-serif text-darkGreen md:p-5">
      <h2 className="xxs:text-normal flex items-center gap-2 font-ubuntu font-semibold md:text-xl">
        Anonymous
        <span className="flex items-center">
          <FaStar className="xxs:size-3 md:size-4" />
          <FaStar className="xxs:size-3 md:size-4" />
          <FaStar className="xxs:size-3 md:size-4" />
          <FaStar className="xxs:size-3 md:size-4" />
          <FaStar className="xxs:size-3 md:size-4" />
        </span>
      </h2>
      <p className="xxs:text-[10px] mb-3 md:text-xs">{review.createTime}</p>
      <p className="xxs:w-40 xxs:text-xs md:w-80 md:text-lg">
        {beginText}{' '}
        {canOverflow && (
          <>
            <span className={`${!isExpanded && 'hidden'}`}>{endText}</span>
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              className="mobile-link font-semibold"
            >
              {isExpanded ? ' show less' : '...show more'}
            </span>
          </>
        )}
      </p>
    </div>
  );
};
