"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import * as z from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  country: z.enum(["south africa"]),
  company_size: z.enum([
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+",
  ]),
  info: z.string(),
});

interface FormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country: "south africa";
  company_size: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+";
  info: string;
}

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  // define the form
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      country: "south africa",
      company_size: "1-10",
      info: "",
    },
  });

  // define a submit handler
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-col space-y-3 items-center justify-center mt-28 pb-20">
      <section
        className="flex flex-col items-center justify-center px-20 space-y-2 
      py-20 text-center md:px-0"
      >
        <h1 className="text-5xl">Talk with our sales team</h1>
        <h3 className="text-xl">
          Fill out your information and an Delaware sales representative will
          contact you shortly.
        </h3>

        {submitted && (
          <h2 className="text-3xl text-green-400 pt-10">
            Thank you for contacting us. We will be in contact with you shortly.
          </h2>
        )}
      </section>

      <Form {...form}>
        {!submitted ? (
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-3 border border-gray-400 p-8 rounded-[6px] space-y-6 md:w-2/4"
          >
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                  <FormLabel className="w-60 text-2xl pt-4">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input className="w-full" placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                  <FormLabel className="w-60 text-2xl pt-4">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input className="" placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 ">
                  <FormLabel className="w-60 text-2xl pt-4">Email</FormLabel>
                  <FormControl>
                    <Input className="" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                  <FormLabel className="w-60 text-2xl pt-4">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input className="" placeholder="" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                  <FormLabel className="w-60 text-2xl pt-4">Country</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <div className="flex">
                        <SelectItem value="south africa">
                          South Africa
                        </SelectItem>
                        <img
                          src="/images/south-africa-flag-icon.svg"
                          alt="sa flag"
                          className="h-8 w-8 mr-2"
                        />
                      </div>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company_size"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                  <FormLabel className="w-60 text-2xl pt-4">
                    Company Size
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="How many employees?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      <div className="flex gap-4">
                        <SelectItem value="1-10">1-10</SelectItem>
                      </div>
                      <SelectItem value="11-50">11-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="201-500">201-500</SelectItem>
                      <SelectItem value="501-1000">501-1000</SelectItem>
                      <SelectItem value="1000+">1000+</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="info"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center space-y-4 w-full">
                  <FormLabel className="w-60 text-2xl pt-4">
                    Information
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      style={{ height: "200px" }}
                      className=""
                      placeholder=""
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div
              className="flex items-center justify-center
              gap-4"
            >
              <Button
                type="submit"
                className="bg-[#000] text-xl rounded-[5px] w-80 h-20 "
                disabled={loading}
                onClick={() => form.handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center space-y-20 h-screen text-2xl text-green-400">
            <div className="-mt-8">
              <img src="/videos/check.gif" alt="check" className="h-28 w-28" />
            </div>
          </div>
        )}
      </Form>
    </main>
  );
}
