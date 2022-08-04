import { BsFillPlusSquareFill } from "react-icons/bs";

export default function NavbarButton({ className, text, icon }) {
  return (
    <button className={className}>
      {icon}
      <span class="align-text-top pl-1.5 font-bold">{text}</span>
    </button>
  );
}
