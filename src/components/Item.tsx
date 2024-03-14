"use client";

import { ItemType } from "@/types";
import React from "react";

const ItemCard = ({ item }: { item: ItemType }) => {
    return (
        <div className="h-[400px] flex flex-col shadow-md rounded-md p-4">
            <img
                src={item.image}
                alt="image"
                className="w-full h-full object-cover"
            />
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <span className="font-bold text-xl">{item.name}</span>
                    <span className="font-bold text-2xl">${item.cost}</span>
                </div>
                <div className="">{item.rarity}</div>
                <div className="">{item.info}</div>

                <button> Buy</button>
            </div>
        </div>
    );
};

export default ItemCard;
