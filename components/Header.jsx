"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Code2, Download } from "lucide-react";
const links = [["About","/#about"],["Skills","/#skills"],["Experience","/#experience"],["Projects","/#projects"],["Education","/#education"],["Contact","/#contact"]];
export default function Header({name}) {
  const [open,setOpen]=useState(false);
  return <header className="header"><div className="wrap header-in"><Link href="/" className="brand"><Code2 size={30}/><span>{name.split(" ")[0]} <b>{name.split(" ").slice(1).join(" ")}</b></span></Link><nav className={`nav ${open?"open":""}`} aria-label="Main navigation">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav><div className="tools"><a className="header-resume" href="/resume.pdf" download><Download size={16}/> Resume</a><button className="icon-btn menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button></div></div></header>;
}
