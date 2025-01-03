"use client"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

 
import { z } from "zod"
 
const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(2).max(500),
})

const FeedbackForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className=" h-screen flex items-center justify-center">
            {/* Contact Section */}
            <div className="bg-primary flex flex-col md:flex-row items-center justify-center space-y-8 border border-zinc-700 rounded-xl">
            <div className=" p-6 flex flex-col items-center justify-center rounded-xl shadow-lg">
                <div className="flex flex-col items-center space-y-2">
                    {/* Icon (Placeholder for now) */}
                    <span className="relative md:top-[-80px] md:left-[-90px] p-3 border border-zinc-700 rounded-xl ">Contact Me</span>
                    <p className="text-3xl font-semibold">Recommendations</p>
                    <p className="text-zinc-500 max-w-sm text-center">
                        Have suggestions or ideas for improvement? I would love to hear from you!
                    </p>
                </div>
            </div>
      
            {/* Feedback Form */}
            <div className="w-full max-w-lg p-4  rounded-xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* Name Field */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
      
                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Email" type="email" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
      
                        {/* Message Field */}
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <textarea
                                            placeholder="Your Message"
                                            {...field}
                                            className="w-full text-sm rounded-md bg-black p-3"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
      
                        {/* Submit Button */}
                        <button className="shadow-[0_4px_14px_0_rgba(205,241,64,0.4)] hover:shadow-[0_6px_20px_rgba(205,241,64,0.3)] hover:bg-[rgba(205,241,64,0.9)] px-6 py-2 bg-[#CDF140] rounded-xl text-black  transition duration-200 ease-linear">
                            Submit
                            </button>
                            
                    </form>
                </Form>
            </div>
            </div>
        </div>
    );
}      
export default FeedbackForm;

