import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CommonCard({ title, icon, description, footerContent }) {
  return (
    <Card className="lg:flex  mb-5 bg-gray-100  gap-6 rounded-2xl p-4 transition duration-300 hover:bg-white hover:shadow-2xl hover:shadow-gray-600/10 cursor-pointer">
      <div className="flex" >
        
        {icon ? icon : null}
      <CardHeader className="p-0 flex items-centre justify-center">
        {title ? (
          <CardTitle className="text-2xl max-w-[250px] text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-gray-950">
            {title}
          </CardTitle>
        ) : null}
        {description ? (
          <CardDescription className="mt-3 text-lg text-gray-600">
            {description}
          </CardDescription>
        ) : null}
      </CardHeader>
      </div>

      <CardFooter className="flex mt-2 p-0 justify-center  ">{footerContent}</CardFooter>
    </Card>
  );
}

export default CommonCard;
