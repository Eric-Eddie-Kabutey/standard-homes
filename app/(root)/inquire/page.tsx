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
        {/* Left Column: Form */}
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
                  defaultCountry="US"
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
                    <SelectItem value="alphabetCity">Alphabet City</SelectItem>
                    <SelectItem value="leJardin">
                      Le Jardin Symphonique
                    </SelectItem>
                    <SelectItem value="vistaDelMare">Vista del Mare</SelectItem>
                    <SelectItem value="willowLane">Willow Lane</SelectItem>
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
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Right Column: Map & Contact Details */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          {/* Embedded Google Map */}
          <iframe
            title="Waylead Company Ghana Limited"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31711.555926956284!2d-0.06394997937502705!3d5.660905219117441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f049020308b%3A0x9c2f4ac95a2625df!2sWaylead%20Company%20Ghana%20Ltd!5e0!3m2!1sen!2sgh!4v1617812323702!5m2!1sen!2sgh"
            className="w-full h-64 border-0 mb-4"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Sales Office</h3>
            <p>1 Waylead Drive, Lashibi</p>
            <p>Sakumono, Ghana</p>

            <Label htmlFor="email" className="mt-2">
              <strong>Phone:</strong>
            </Label>
            <div className="space-y-1">
              <Button
                variant={"outline"}
                className="text-yellow-600 font-extrabold flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +233-30-341-1109
              </Button>
              <Button
                variant={"outline"}
                className="text-yellow-600 font-extrabold flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +233-50-140-8803
              </Button>
            </div>

            <p>
              <strong>Email:</strong> info@waylead.org
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <Button type="button" size="icon">
                <FaFacebook />
              </Button>
              <Button type="button" size="icon">
                <FaInstagram />
              </Button>
              <Button type="button" size="icon">
                <FaTwitter />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
