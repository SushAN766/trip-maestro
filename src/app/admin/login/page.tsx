
import React from 'react'
import { Card , CardHeader} from '@heroui/react'
import Image from "next/image";

const Login = () => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: 'url("/home/home-bg.jpeg")'
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-2xl z-0"></div>
  
  <Card className="shadow-2xl bg-opacity-20 w-[480px] z-10">
    <CardHeader className="flex flex-col gap-1 capitalize text-3xl items-center">
      <Image 
        src="/logo.png"
        alt="logo"
        height={80}
        width={80}
        className="cursor-pointer"
      />
      
    </CardHeader>
  </Card>
</div>
  );
};

export default Login;