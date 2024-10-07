import { DockerIcon } from "@/assets/Icons/Docker";
import { GithubIcon } from "@/assets/Icons/Github";
import { JiraIcon } from "@/assets/Icons/JIra";
import { NodejsIcon } from "@/assets/Icons/Nodejs";
import { RenderIcon } from "@/assets/Icons/Render";
import { ShopifyIcon } from "@/assets/Icons/Shopify";
import { VercelIcon } from "@/assets/Icons/Vercel";

export default function Tools() {
  return (
    <div>
      <div className="font-GeomBold text-white  ">
        <h1 className="text-red-500 md:text-lg lg:text-3xl">TOOLS</h1>
      </div>
      <div className="flex flex-wrap gap-3 lg:gap-8 pt-3 cursor-pointer uppercase font-GeomLight text-[0.8rem] text-white">
        <div className="flex flex-col items-center  ">
          <div className="md:text-xl lg:text-3xl">
            <GithubIcon />
          </div>
          <h1>Github</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <VercelIcon />
          </div>
          <h1>Vercel</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <DockerIcon />
          </div>
          <h1>docker</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <NodejsIcon />
          </div>
          <h1>nodejs</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <ShopifyIcon />
          </div>
          <h1>shopify</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <JiraIcon />
          </div>
          <h1>jira</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <RenderIcon />
          </div>
          <h1>render</h1>
        </div>
      </div>
    </div>
  );
}
