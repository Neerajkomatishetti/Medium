import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;


type CardSignProps = { type: "Signin" | "Signup", toggleCard: () => void}

export function CardSign({type, toggleCard} : CardSignProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const[passwordLabel, setPasswordLabel] = useState("Password");

  const navigate = useNavigate();

  return (
    <Card className="{} w-[80%] md:w-[50%] max-w-sm pt-1">
         <div className="flex w-full justify-end px-2 py-2">
            <button onClick={toggleCard} className="hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </button>
        </div>
      <CardHeader>
        <CardTitle className="font-bold text-2xl">{type === "Signup" ? "Create an Account" : "Login into your Account"}</CardTitle>
        <CardDescription>
          {type === "Signup"?"Enter you details to signup":"Enter your email below to login to your account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            { type === "Signup"? <div className="grid gap-2">
              <Label htmlFor="email">Name</Label>
              <Input onChange={(e)=>{
                setName(e.target.value);
              }}
                id="username"
                type="text"
                value={name}
                placeholder="john doe"
                required
              />
            </div>: <></>}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input onChange={(e) =>{
                setEmail(e.target.value);
              }}
                id="email"
                type="email"
                value={email}
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label id="passwordLabel" htmlFor="password">{passwordLabel}</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input value={password} onChange={(e)=>{ setPassword(e.target.value) }} 
                id="password" type="password" required 
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button  onClick={
              async () =>{

                      const Signtype: string = type.toLowerCase();

                      if(password.length < 6){
                        setPasswordLabel("Must contain 6 characters")
                        return
                      }else{
                        setPasswordLabel("Password");
                      }
                      const response =  await axios.post(`${BACKEND_URL}/user/${Signtype}`,{
                          name:name,
                          email:email,
                          password:password
                        }, {validateStatus: ()=>true});

                        if(response.data){
                          const token = response.data.token
                          localStorage.setItem('token', token );
                        }

                        if(response.data.message){
                          alert(response.data.message);
                          setPassword("")
                          setEmail("")
                          setName("")
                        }else{           
                          navigate('/Home');
                        }
              }
        } type="submit" className="w-full">
          {type === "Signup"? "Signup": "Login"}
        </Button>
      </CardFooter>
    </Card>
  )
}
