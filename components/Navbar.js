import NavbarButton from "./NavbarButton";
import { BsFillPlusSquareFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <div class="flex flex-row pb-7">
      <h1 class="font-bold text-2xl leading-10">🍉 Pastèque</h1>
      <div class="ml-auto">
        <NavbarButton
          className="bg-green-500 p-2 rounded-md drop-shadow-lg button-text-shadow"
          text="New Slice"
          icon={
            <BsFillPlusSquareFill class="inline text-lg drop-shadow-[0_2px_10px_rgba(0,0,0,1)]" />
          }
        />
      </div>
    </div>
  );
}
