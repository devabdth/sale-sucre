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
}

export default (props: ButtonProps) => {
    let stylingClasses, iconColor;
    switch(props.variant) {
        default:
        case "primary":
            stylingClasses= "";
            break;
        case "primaryIcon":
            stylingClasses= "";
            break;
        case "secondary":
            stylingClasses= "";
            break;
        case "secondaryIcon":
            stylingClasses= "";
            break;
        case "shadow":
            stylingClasses= "";
            break;
        case "shadowIcon":
            stylingClasses= "";
            break;
    }
    return <button className={(stylingClasses ?? "") + "cursor-pointer"} onClick={props.onClick}>
        {props.title}
        {!(props.icon) && <FontAwesomeIcon icon={props.icon!} color={iconColor!} width={props.iconWidth ?? 64} height={props.iconHeight ?? 64} size={props.iconSize!} />}
    </button>
}
