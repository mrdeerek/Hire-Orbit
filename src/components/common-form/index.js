import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function CommonForm({
  action,
  isBtnDisabled,
  formControls,
  buttonText,
  btnType,
  formData,
  setFormData,
  handleFileChange,
}) {
  function renderInputByComponentType(getCurrentControl) {
    let content = null;
    switch (getCurrentControl.componentType) {
      case "input":
        content = (
          <div className=" w-full items-center mt-4">
            <Input
              type="text"
              disabled={getCurrentControl.disabled}
              placeholder={getCurrentControl.placeholder}
              name={getCurrentControl.name}
              id={getCurrentControl.name}
              value={formData[getCurrentControl.name]}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                })
              }
              className="w-full rounded-md h-[60px] px-4 border dark:bg-black bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
            />
          </div>
        );

        break;

      case "file":
        content = (
          <Label
            for={getCurrentControl.name}
            className="w-full flex bg-gray-100 dark:bg-black items-center px-3 py-2 mx-auto text-centre mt-4 border-2 border-dashed  rounded-lg cursor-pointer"
          >
            <h2 className="mr-2" >{getCurrentControl.label}</h2>
            <Input
              onChange={handleFileChange}
              id={getCurrentControl.name}
              type="file"
            ></Input>
          </Label>
        );
        break;

      default:
        content = (
          <div className="relative flex items-center mt-8">
            <Input
              type="text"
              disabled={getCurrentControl.disabled}
              placeholder={getCurrentControl.placeholder}
              name={getCurrentControl.name}
              id={getCurrentControl.name}
              value={formData[getCurrentControl.name]}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [event.target.name]: event.target.value,
                })
              }
              className="w-full rounded-md h-[60px] px-4 border dark:bg-black bg-gray-100 text-lg outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 "
            />
          </div>
        );
        break;
    }
    return content;
  }

  return (
    <form action={action} className="grid grid-cols-2 gap-2 gap-x-4 w-full" >
      {formControls.map((control) => renderInputByComponentType(control))}
      <div className="mt-4 grid grid-cols-subgrid  col-span-2 ">
        <Button
          type={btnType || "submit"}
          className="disabled:opacity-60 p-6  flex h-11 items-center justify-center "
          disabled={isBtnDisabled}
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
