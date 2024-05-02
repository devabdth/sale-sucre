import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
    title: String;
    variant: "primary" | "primaryIcon" | "secondary" | "secondaryIcon" | "shadow" | "shadowIcon";
    onClick: () => void;
    icon?: IconProp;
    iconHeight?: number;
    iconWidth?: number;
    iconSize?: SizeProp;
    iconColor?: String;
    iconHoverColor?: String;
}

export default (props: ButtonProps) => {
    let stylingClasses, iconColor;
    switch(props.variant) {
        default:
        case "primary":
            stylingClasses= "px-4 py-2 rounded-full bg-pink text-background font-secondary border-2 border-pink hover:bg-transparent hover:text-pink transition-all font-bold duration-500 ease-in-out";
            break;

        case "secondary":
            stylingClasses= "px-4 py-2 rounded-full bg-background text-pink font-secondary border-2 border-background hover:bg-transparent bg-background text-primary hover:text-background transition-all font-bold duration-500 ease-in-out";
            break;

        case "shadow":
            stylingClasses= "underline text-background px-4 py-2 font-secondary font-bold";
            break;

        case "primaryIcon":
            stylingClasses= "p-2 bg-primary aspect-square rounded-xl ";
            break;

        case "secondaryIcon":
            break;

        case "shadowIcon":
            stylingClasses= `bg-transparent ${props.iconColor} `;
            break;
    }
    return (
        <button className={stylingClasses! + `cursor-pointer whitespace-nowrap flex flex-row gap-2 items-center my-auto hover:${props.iconHoverColor}`} onClick={props.onClick}>
            {props.title}
            {(props.icon !== undefined) && <FontAwesomeIcon className={`${props.iconColor}`}
                icon={props.icon!} color={iconColor!} width={props.iconWidth ?? 64} height={props.iconHeight ?? 64} size={props.iconSize!} />}
        </button>
    );

}
