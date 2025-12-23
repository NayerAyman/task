import Image from "next/image";
import React from "react";

export default function Rating() {
  const reviews = [
    {
      name: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    },
    {
      name: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    },
    {
      name: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
    },
    {
      name: "Alex Daewn",
      rating: 4,
      date: "4 months ago",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ",
    },
  ];

  const starDistribution = [
    { stars: 5, percentage: 67, width: "67%" },
    { stars: 4, percentage: 15, width: "15%" },
    { stars: 3, percentage: 6, width: "6%" },
    { stars: 2, percentage: 3, width: "3%" },
    { stars: 1, percentage: 9, width: "9%" },
  ];

  const renderStars = (rating: number) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Image
          width={20}
          height={20}
          key={i}
          src={i < rating ? "/icon/Star.svg" : "/icon/Star_2.svg"}
          alt="star"
          className="w-4 h-4 mr-2"
          />
      ))}
    </div>
  );

  return (
    <div className="relative p-1 md:p-4  mb-10 bg-white">
      <h2 className="relative text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Rating & Reviews
        <span className="w-15 md:w-12 h-1 bg-[#be968e] inline-block rounded-2xl absolute left-0 -bottom-1"></span>
      </h2>
      <div className="flex mb-5 flex-row">
        <div className="flex flex-col md:flex-row items-center gap-8 md:items-center w-full justify-start mb-6">
          <div className="flex m-auto md:m-0 items-baseline mb-4 md:mb-0">
            <span className="text-7xl md:text-9xl font-normal text-gray-950">
              4,5
            </span>
            <span className="text-2xl md:text-4xl text-gray-500 ml-2">/5</span>
          </div>

          <div className="grow mx-0 md:mx-8 w-full md:max-w-[45%]">
            {starDistribution.map((dist) => (
              <div key={dist.stars} className="flex items-center mb-2">
                <span className="text-lg font-medium text-gray-600 w-8 flex items-center">
                  <Image
                    width={20}
                    height={20}
                    src="/icon/Star.svg"
                    alt="star"
                    className="inline mr-1 w-4 h-4 ml-1"
                  />
                  {dist.stars}
                </span>
                <div className="grow h-2 bg-gray-200 rounded-full mx-2">
                  <div
                    className="h-2 bg-[#be968e] rounded-full"
                    style={{ width: dist.width }}
                  ></div>
                </div>
                <span className="text-xl text-gray-600 w-12  text-right">
                  %{dist.percentage}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden  md:mr-10 md:flex flex-col items-center gap-3 justify-center md:items-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-md text-gray-600 mb-4">Total Reviews</span>
            <span className="text-2xl md:text-6xl font-bold text-gray-950 mb-2">
              3.0K
            </span>
          </div>
          <button
            className="bg-[#be968e] text-white py-5 px-10 rounded-xl text-sm font-medium
             hover:bg-[#8f6a63] whitespace-nowrap
             flex items-center gap-2"
          >
            Add Comment
            <Image
              width={23}
              height={23}
              src="/icon/chat 01.svg"
              alt="chat icon"
            />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <div className="flex items-center mb-2">
              <span className=" font-semibold text-gray-800">{review.name}</span>
              <span className="ml-2">{renderStars(review.rating)}</span>
              <span className="ml-auto text-sm text-gray-500">
                {review.date}
              </span>
            </div>
            <p className="text-sm text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="text-[#be968e] text-md font-semibold bg-[#f7f3f2] px-5 py-4 rounded-xl hover:bg-[#c49a92fa]  hover:text-white duration-200">
          View More Comments
        </button>
      </div>
    <Image src="/Layer_1.svg" alt="review" className="absolute bottom-6 left-1" width={100} height={100} />
    </div>
  );
}
