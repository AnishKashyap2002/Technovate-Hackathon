"use client";

import { ItemType } from "@/types";
import React from "react";
import { FaStar } from "react-icons/fa";

const ItemCard = ({ item }: { item: ItemType }) => {
    let arr = [];
    for (let i = 0; i < item.rarity; i++) {
        arr.push(1);
    }

    return (
        <div className="  flex flex-col shadow-md rounded-md p-4">
            <img
                src={item.image}
                alt="image"
                className="w-[400px] h-[300px] object-cover"
            />
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-xl">{item.name}</span>
                    <span className="font-bold text-2xl">${item.cost}</span>
                </div>
                <div className="flex items-center gap-1">
                    {arr.map((star) => (
                        <FaStar className="text-2xl text-amber-500" />
                    ))}
                </div>
                <div className="">{item.info}</div>

                <button className="w-full bg-green-500  p-4 rounded-md">
                    {" "}
                    Buy
                </button>
            </div>
        </div>
    );
};

export default ItemCard;
