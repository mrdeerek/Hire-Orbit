import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import "./loader.css";
export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-white ">
      <div>
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          class="wheel-and-hamster mx-auto mb-10"
        >
          <div class="wheel"></div>
          <div class="hamster">
            <div class="hamster__body">
              <div class="hamster__head">
                <div class="hamster__ear"></div>
                <div class="hamster__eye"></div>
                <div class="hamster__nose"></div>
              </div>
              <div class="hamster__limb hamster__limb--fr"></div>
              <div class="hamster__limb hamster__limb--fl"></div>
              <div class="hamster__limb hamster__limb--br"></div>
              <div class="hamster__limb hamster__limb--bl"></div>
              <div class="hamster__tail"></div>
            </div>
          </div>
          <div class="spoke"></div>
        </div>
        
<div class="loader">
   <div data-glitch="Loading..." class="glitch">Loading...</div>
</div>
      </div>
    </div>
  );
}
