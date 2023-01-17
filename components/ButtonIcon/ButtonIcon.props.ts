import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";
import {close, hamburger, up} from "../../public/Icons";

export  const icons = {
    close,
    hamburger,
    up,
}

export type IconName = keyof typeof icons

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconName
    appearance: "primary" | "white";
}