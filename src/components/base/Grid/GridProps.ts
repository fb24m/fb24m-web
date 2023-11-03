import { HTMLAttributes } from "react";

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
	proportions: '2-1' | '1-1-1' | '1-2'
}