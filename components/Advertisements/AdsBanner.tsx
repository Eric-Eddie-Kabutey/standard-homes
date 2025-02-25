import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const AdsBanner = () => {
    return (
        <div className="flex gap-3 items-center justify-center bg-[#ff4757] text-white py-2.5 text-center">
            <p>🚨 Limited Time Offer! Click Here for Special Discount</p>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="border-none px-2 py-1 rounded-md bg-[#CD8F0F]">See property</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AdsBanner