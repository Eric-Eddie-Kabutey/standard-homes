"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

const AdsBanner = () => {
    const [isOpen, setIsOpen] = useState(true)
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const images = [
        "https://img.freepik.com/free-photo/colonial-style-house-night-scene_1150-17925.jpg?t=st=1740505268~exp=1740508868~hmac=bfc1ec603f8949bae3d68d204bc9e7342e973dbab95c5d95ca21c62249d4d9be&w=1380",
        "https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=",
        "https://media.istockphoto.com/id/147205632/photo/modern-home-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=sxRQ398SxAjC4FrRombjl46oDGJVdy23T7i3RXO-mww=",
        "https://images.smiletemplates.com/uploads/screenshots/162/0000162067/powerpoint-template-450w.jpg",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
    ]

    return (
        <div className="flex gap-3 mt-[-11.7px] items-center justify-between md:justify-center bg-[#ff4757] text-white py-2.5 px-[1%] text-center">
            <p>🚨 Limited Time Offer! Click Here for Special Discount</p>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <p className="border-none p-1 cursor-pointer rounded-lg bg-[#ee404e]">
                        <MoveRight />
                    </p>
                </DialogTrigger>
                <DialogContent className='bg-[#7FB5E3] p-0'>
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                                                <Image
                                                    src={image}
                                                    alt={"property image"}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-cover rounded-lg"
                                                    priority={index === 0} // Only for first image
                                                />
                                                <Link href="https://wa.me/+2207922004" className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[95%]">
                                                    <Button className="w-full bg-[#FF4757] hover:bg-[#c03944] text-white font-bold py-6 px-4 rounded-lg shadow-lg">
                                                        Book Now
                                                    </Button>
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='left-[1px]' />
                        <CarouselNext className='right-[1px]' />
                    </Carousel>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AdsBanner