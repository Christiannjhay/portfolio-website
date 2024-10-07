import { DjangoIcon } from "@/assets/Icons/Django";
import { DotnetIcon } from "@/assets/Icons/Dotnet";
import { ExpressIcon } from "@/assets/Icons/Express";
import { FirebaseIcon } from "@/assets/Icons/Firebase";
import { FlaskIcon } from "@/assets/Icons/Flask";
import { GraphqlIcon } from "@/assets/Icons/Graphql";
import { MysqlIcon } from "@/assets/Icons/MySql";
import { PostgresqlIcon } from "@/assets/Icons/Postgresql";
import { SpringbootIcon } from "@/assets/Icons/Springboot";

export default function BackEnd() {
  return (
    <div>
      <div className="font-GeomBold text-white ">
        <h1 className="text-red-500 md:text-lg lg:text-3xl">BACK-END</h1>
      </div>
      <div className="flex flex-wrap gap-3 lg:gap-8 pt-3 uppercase font-GeomLight text-[0.8rem] text-white">
        <div className="flex flex-col items-center  ">
          <div className="md:text-xl lg:text-3xl">
            <ExpressIcon />
          </div>
          <h1>express</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <MysqlIcon />
          </div>
          <h1>mysql</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <FirebaseIcon />
          </div>
          <h1>firebase</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <GraphqlIcon/>
          </div>
          <h1>graphql</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <DjangoIcon />
          </div>
          <h1>Django</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <FlaskIcon />
          </div>
          <h1>Flask</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <DotnetIcon />
          </div>
          <h1>.NET</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <PostgresqlIcon />
          </div>
          <h1>postgresql</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="md:text-xl lg:text-3xl">
            <SpringbootIcon />
          </div>
          <h1>springboot</h1>
        </div>
      </div>
    </div>
  );
}
