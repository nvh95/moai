import { ButtonGroup } from "../button-group/button-group";
import { Button, ButtonProps, ButtonSize, ButtonStyle } from "../button/button";

export interface SwitcherOption<T> {
	/**
	 * The value of the option
	 */
	value: T;
	/**
	 * The label of the option
	 */
	label?: string;
	/**
	 * The icon of the option. See the "Icon" guide for more detail.
	 */
	icon?: ButtonProps["icon"];
	/**
	 * The accessible label for the icon, if you provide no "label" prop.
	 */
	iconLabel?: ButtonProps["iconLabel"];
	/**
	 * The React's key for the option. It's recommend to explicitly define
	 * this. If not, it will fallback to either `label` or `iconLabel`.
	 */
	key?: string;
	/**
	 * Whether this option is disabled
	 */
	disabled?: boolean;
}

interface Props<T> {
	/**
	 * The selected value of the Switcher. This is required because Switcher
	 * does not support uncontrolled use case.
	 */
	value: T;
	/**
	 * Callback to set the selected value
	 */
	setValue: (value: T) => void;
	/**
	 * List of the switcher's options. See the "SwitcherOption" tab for detail.
	 */
	options: SwitcherOption<T>[];
	/**
	 * Whether the switcher (i.e. its buttons) should fill its container's
	 * space (similar to width: 100%)
	 */
	fill?: boolean;
	/**
	 * Whether the selected option is "highlighted" with a primary color. If
	 * not set, the selected option is dimmed, which is the default behaviour.
	 */
	highlight?: boolean;
	/**
	 * The sizes of the switcher's buttons. Choose one from "Switcher.sizes".
	 * See the "Button" page for more detail.
	 */
	size?: ButtonSize;
	/**
	 * The styles of the switcher's buttons. Choose one from "Switcher.styles".
	 * See the "Button" page for more detail.
	 */
	style?: ButtonStyle;
	/**
	 * Whether to disable the Switcher. This disables all buttons. To disable
	 * some option, use SwitcherOption.disabled attribute.
	 */
	disabled?: boolean;
}

/**
 * Switchers display several options as grouped buttons for users to select.
 * They are compact alternatives to [Radios][4]. When there are only 2 options,
 * they work like [Toggles][5].
 * 
 * Like Radios, Switchers should be used to select a single option out of a
 * small list (less than 5) of options. When there are many options, consider
 * [Selects][3]. When multiple options can be selected, consider
 * [Checkboxes][1], or use [ButtonGroups][2] directly.
 * 
 * [1]: /docs/components-checkbox--primary
 * [2]: /docs/components-button-group--primary
 * [3]: /docs/components-select--primary
 * [4]: /docs/components-radio--primary
 * [5]: https://www.nngroup.com/articles/toggle-switch-guidelines/
 */
export const Switcher = <T,>(props: Props<T>): JSX.Element => (
	<ButtonGroup fill={props.fill}>
		{props.options.map((option) => {
			const selected = option.value === props.value;
			return (
				<Button
					// We're sure either "label" or "iconLabel" is defined as
					// it's checked in the Button component
					key={option.key || option.label || option.iconLabel}
					icon={option.icon}
					iconLabel={option.iconLabel}
					children={option.label}
					onClick={() => {
						if (selected === false) props.setValue(option.value);
					}}
					disabled={props.disabled || option.disabled}
					fill={props.fill}
					size={props.size}
					style={props.style}
					{...(props.highlight
						? { highlight: selected }
						: { selected: selected })}
				/>
			);
		})}
	</ButtonGroup>
);

Switcher.styles = Button.styles;
Switcher.sizes = Button.sizes;
