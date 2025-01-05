"use client"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
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
        <div className="min-h-screen flex items-center justify-center p-4">
            {/* Contact Section */}
            <div className="bg-primary flex flex-col md:flex-row items-center justify-center gap-8 border border-zinc-700 rounded-xl p-6">
                <div className="flex flex-col items-center space-y-6">
                    {/* Icon (Placeholder for now) */}
                    <span className="md:self-start p-3 border border-zinc-700 rounded-xl">Contact Me</span>
                    <p className="text-3xl font-semibold">Recommendations</p>
                    <p className="text-zinc-500 max-w-sm text-center">
                        Have suggestions or ideas for improvement? I would love to hear from you!
                    </p>
                </div>
      
                {/* Feedback Form */}
                <div className="w-full max-w-lg">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Name" className="bg-black" {...field} />
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
                                            <Input placeholder="Email" type="email" className="bg-black" {...field} />
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
                                                className="flex w-full min-h-[120px] rounded-md  px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-black"/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
          
                            {/* Submit Button */}
                            <button className="w-full shadow-[0_4px_14px_0_rgba(205,241,64,0.4)] hover:shadow-[0_6px_20px_rgba(205,241,64,0.3)] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-black font-medium transition duration-200 ease-linear py-2">
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

