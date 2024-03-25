type AsProp<TElement extends React.ElementType> = {
	as?: TElement;
};

export type RequiredAsProp<TElement extends React.ElementType> = Required<AsProp<TElement>>;

type MergePropsWithAsProp<TElement extends React.ElementType, TProps> = TProps & AsProp<TElement>;

// == Get all other primitive element props by Omit the result of MergedProps from React.ComponentPropsWithoutRef
type InferPrimitiveProps<TElement extends React.ElementType, TProps> = Omit<
	React.ComponentPropsWithoutRef<TElement>,
	keyof MergePropsWithAsProp<TElement, TProps> | "className" | "children" // == Removing children and className as well to give components control over these props
>;

// == Polymorphic props helper
export type PolymorphicProps<
	TElement extends React.ElementType,
	TProps extends Record<string, unknown> = AsProp<TElement>,
> = MergePropsWithAsProp<TElement, TProps> & InferPrimitiveProps<TElement, TProps>;

type RefProp<TElement extends React.ElementType> = {
	ref?: React.ComponentPropsWithRef<TElement>["ref"];
};

// == For components with the Ref Prop
export type PolymorphicPropsWithRef<
	TElement extends React.ElementType,
	TProps extends Record<string, unknown> = AsProp<TElement>,
> = PolymorphicProps<TElement, TProps> & RefProp<TElement>;
