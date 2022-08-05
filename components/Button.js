import Link from "next/link";

export default function Button({ className, text, icon, link, onClick }) {
  if (link === undefined) {
    return (
      <button className={className} onClick={onClick}>
        {icon}
        <span className="align-text-top pl-1.5 font-bold">{text}</span>
      </button>
    );
  } else {
    return (
      <Link href={link}>
        <button className={className} onClick={onClick}>
          {icon}
          <span className="align-text-top pl-1.5 font-bold">{text}</span>
        </button>
      </Link>
    );
  }
}
