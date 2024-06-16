import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { useAppContext } from "@/Context";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function SignIn() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const { backendApi, setUser, setAccessToken, setRefreshToken } =
    useAppContext();
  const onSubmit = (data: { email: string; password: string }) => {
    setIsLoading(true);
    backendApi
      .login(data)
      .then((res) => {
        setUser(res.user);
        setAccessToken(res.accessToken);
        setRefreshToken(res.refreshToken);
        navigate(window.location.pathname);
      })
      .catch((err) => {
        if (
          (err instanceof AxiosError && err.response?.status === 401) ||
          err.response?.status === 404
        ) {
          toast({
            title: "Invalid credentials",
            description: "Please check your email and password.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Something went wrong",
            description:
              err?.response?.data?.message ||
              err?.message ||
              "Something went wrong",
            variant: "destructive",
          });
        }
      });
    setIsLoading(false);
  };
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-6">
      <div className="flex flex-col gap-2">
        <span className="tex-2xl text-center font-bold">Sign In</span>
        <span className="text-sm text-slate-400">
          Let’s build something greate
        </span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-[30rem] flex-col gap-4 px-16"
        >
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-black/50">
                  Username
                </FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs text-black/50">
                  Password
                </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>

                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
          <Button
            className={twMerge(
              "mt-4 min-h-[3rem] w-full text-center",
              isLoading && "pointer-events-none bg-gray-300",
            )}
            disabled={isLoading}
            type="submit"
          >
            {!isLoading ? "SIGN IN" : "LOADING..."}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SignIn;
