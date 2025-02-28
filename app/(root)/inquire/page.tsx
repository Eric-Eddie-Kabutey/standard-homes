"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import NewsBanner from "@/components/News/Banner";

const ContactUs = () => {
  const [phoneNumber, setPhoneNumber] = React.useState<string | undefined>(
    undefined
  );

  return (
    <React.Fragment>
      <NewsBanner title="Contact" />
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 gap-10 py-8">
        {/* Left Column: Map & Contact Details */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          {/* Embedded Google Map */}
          <iframe
            title="Waylead Company Ghana Limited"
            src="https://maps.google.com/maps?q=AU+Summit+Highway+near+Africmed+at+MSJ+Plaza,+Brusubi,+The+Gambia&z=15&output=embed"
            className="w-full h-64 border-0 mb-4"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Sales Office</h3>
            <p>2nd Floor Office 8 MSJ Plaza</p>
            <p>Bertil Harding Highway Brusubi, The Gambia</p>

            <Label htmlFor="email" className="mt-2">
              <strong>Phone:</strong>
            </Label>
            <div className="space-y-1">
              <Button
                variant={"outline"}
                className="text-yellow-600 font-extrabold flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +220 7922004
              </Button>
            </div>

            <p>
              <strong>Email:</strong> standardhomesgambia@gmail.com
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <Button type="button" size="icon">
                <FaFacebook className="text-white" />
              </Button>
              <Button type="button" size="icon">
                <FaInstagram className="text-white" />
              </Button>
              <Button type="button" size="icon">
                <FaTwitter className="text-white" />
              </Button>
            </div>
          </div>
        </div>
        {/* Right Column: Form */}
        <Card className="w-full md:w-1/2 bg-gray-50 md:pr-8">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              For more information, sales, and availability of our units, please
              drop us a note. We&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              {/* First Name */}
              <Input
                type="text"
                placeholder="First Name (Optional)"
                className="w-full"
              />

              {/* Last Name */}
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name (Optional)"
                className="w-full"
              />

              {/* Email */}
              <Input
                type="email"
                placeholder="Email (required)"
                className="w-full"
              />

              {/* Phone */}
              <div>
                <Label htmlFor="phone">Phone (Optional)</Label>
                <PhoneInput
                  international
                  defaultCountry="GM"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  id="phone"
                  placeholder="Enter phone number"
                  className="mt-1 border py-2 px-3 w-full rounded-md"
                  style={{ width: "100%" }}
                />
              </div>

              {/* Interested In */}
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Interested in" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alphabetCity">Buying Land</SelectItem>
                    <SelectItem value="leJardin">
                      Renting house
                    </SelectItem>
                    <SelectItem value="vistaDelMare">Residential construction</SelectItem>
                    <SelectItem value="willowLane">Commercial construction</SelectItem>
                    <SelectItem value="willowLane">Borehole drilling</SelectItem>
                    <SelectItem value="willowLane">Property management</SelectItem>

                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message (required)"
                  className="w-full"
                />
              </div>

              {/* I'm not a robot */}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" disabled />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none"
                >
                  I am not a robot
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full text-white">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;