const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 16.8001C11.3 16.8001 10.6 16.5301 10.07 16.0001L3.55002 9.48014C3.26002 9.19014 3.26002 8.71014 3.55002 8.42014C3.84002 8.13014 4.32002 8.13014 4.61002 8.42014L11.13 14.9401C11.61 15.4201 12.39 15.4201 12.87 14.9401L19.39 8.42014C19.68 8.13014 20.16 8.13014 20.45 8.42014C20.74 8.71014 20.74 9.19014 20.45 9.48014L13.93 16.0001C13.4 16.5301 12.7 16.8001 12 16.8001Z"
				fill="white"
			/>
		</svg>
	);
};

export default ChevronDownIcon;
